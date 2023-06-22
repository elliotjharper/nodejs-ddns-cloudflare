import fetch from 'node-fetch';

/**
 * @returns {Promise<string>}
 */
export async function getMyIp() {
    const ipEndpoint = 'https://cloudflare.com/cdn-cgi/trace';

    const response = await fetch(ipEndpoint);

    //console.log(response);

    const ipStringRegex = /ip=(\d+\.\d+\.\d+\.\d+)/;
    const responseText = await response.text();

    //console.log(responseText);

    const matchFromResponse = responseText.match(ipStringRegex);

    const ipFromResponse = matchFromResponse[1];

    console.log(`Your ip is: ${ipFromResponse}`);

    return ipFromResponse;
}
