const IpfsApi = require('ipfs-api')

const ipfs = new IpfsApi()

ipfs.config.set('Discovery.MDNS.Enabled', false, console.log)
ipfs.config.set('Discovery.MDNS.Interval', 11, console.log)
ipfs.config.set('Discovery.MDNS.Interval', '11', console.log)

/*
 * Output:
 * 
 * null { Key: 'Discovery.MDNS.Enabled', Value: false }
 * { Error: failed to set config value: failure to decode config: json: cannot unmarshal string into Go struct field MDNS.Interval of type int (maybe use --json?)
 *     at parseError (/home/daniel/repos/siderus/config-set-repro/node_modules/ipfs-api/src/utils/send-request.js:17:17)
 *     at ClientRequest.<anonymous> (/home/daniel/repos/siderus/config-set-repro/node_modules/ipfs-api/src/utils/send-request.js:47:14)
 *     at Object.onceWrapper (events.js:273:13)
 *     at ClientRequest.emit (events.js:182:13)
 *     at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:562:21)
 *     at HTTPParser.parserOnHeadersComplete (_http_common.js:109:17)
 *     at Socket.socketOnData (_http_client.js:449:20)
 *     at Socket.emit (events.js:182:13)
 *     at addChunk (_stream_readable.js:283:12)
 *     at readableAddChunk (_stream_readable.js:264:11) code: 0, type: 'error' }
 * { Error: failed to set config value: failure to decode config: json: cannot unmarshal string into Go struct field MDNS.Interval of type int (maybe use --json?)
 *     at parseError (/home/daniel/repos/siderus/config-set-repro/node_modules/ipfs-api/src/utils/send-request.js:17:17)
 *     at ClientRequest.<anonymous> (/home/daniel/repos/siderus/config-set-repro/node_modules/ipfs-api/src/utils/send-request.js:47:14)
 *     at Object.onceWrapper (events.js:273:13)
 *     at ClientRequest.emit (events.js:182:13)
 *     at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:562:21)
 *     at HTTPParser.parserOnHeadersComplete (_http_common.js:109:17)
 *     at Socket.socketOnData (_http_client.js:449:20)
 *     at Socket.emit (events.js:182:13)
 *     at addChunk (_stream_readable.js:283:12)
 *     at readableAddChunk (_stream_readable.js:264:11) code: 0, type: 'error' } 
 */