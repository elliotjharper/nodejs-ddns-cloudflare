import { getMyIp } from './get-my-ip.js';
import { mainSettings } from './settings.js';
import { updateCloudflareDnsEntry } from './update-cloudflare.js';

export async function main() {
    const myIp = await getMyIp();

    await updateCloudflareDnsEntry(
        myIp,
        mainSettings.zoneName,
        mainSettings.aRecord,
        mainSettings.apiKey,
        mainSettings.email
    );
}

await main();
