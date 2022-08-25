/* eslint-disable */
import { Wallet, Transaction } from "./multisig";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

export interface GenesisState {
  /** registered multisig wallets */
  wallets: Wallet[];
  transactions: Transaction[];
}

function createBaseGenesisState(): GenesisState {
  return { wallets: [], transactions: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.wallets) {
      Wallet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallets.push(Wallet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      wallets: Array.isArray(object?.wallets)
        ? object.wallets.map((e: any) => Wallet.fromJSON(e))
        : [],
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.wallets) {
      obj.wallets = message.wallets.map((e) =>
        e ? Wallet.toJSON(e) : undefined
      );
    } else {
      obj.wallets = [];
    }
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.wallets = object.wallets?.map((e) => Wallet.fromPartial(e)) || [];
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;
