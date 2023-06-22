import Cloudflare from 'cloudflare';

/**
 * @typedef {object} CloudflareResult
 * @property {string} id
 * @property {string} name
 */

/**
 * @returns {CloudflareResult}
 */
function cloudflareResults(response) {
    return response.result;
}

/**
 * @param name {string}
 * @returns {CloudflareResult}
 */
function cloudflareResultByName(response, name) {
    const results = cloudflareResults(response);
    const match = results.find((result) => result.name === name);
    if (!match) {
        throw new Error(`Could not find a match for name: ${name}`);
    }
    return match;
}

/**
 * @param ipAddress {string}
 * @param cloudflareZone {string}
 * @param aRecord {string}
 * @param cloudflareApiKey {string}
 * @param cloudflareEmail {string}
 */
export async function updateCloudflareDnsEntry(
    ipAddress,
    cloudflareZone,
    aRecord,
    cloudflareApiKey,
    cloudflareEmail
) {
    const cloudflare = new Cloudflare({
        email: cloudflareEmail,
        key: cloudflareApiKey,
    });

    const zonesResponse = await cloudflare.zones.browse();
    const zone = cloudflareResultByName(zonesResponse, cloudflareZone);

    const dnsRecordsResponse = await cloudflare.dnsRecords.browse(zone.id);
    const dnsRecord = cloudflareResultByName(dnsRecordsResponse, aRecord);

    await cloudflare.dnsRecords.edit(zone.id, dnsRecord.id, {
        content: ipAddress,
        name: dnsRecord.name,
        ttl: 1,
        type: dnsRecord.type,
    });
}
