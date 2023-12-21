import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import {Poker as PokerService} from '../gen/poker_connect.js';

/**
 * @param {import('@connectrpc/connect-web').GrpcWebTransportOptions} transportOptions
 * @return {import('@connectrpc/connect').PromiseClient<PokerService>}
 */
export default function createClient(transportOptions) {
    const transport = createGrpcWebTransport(transportOptions);

    return createPromiseClient(PokerService, transport);
}