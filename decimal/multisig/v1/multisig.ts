/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

export interface Transaction {
  id: string;
  wallet: string;
  receiver: string;
  coins: Coin[];
  signers: string[];
  createdAt: number;
}

export interface Wallet {
  address: string;
  owners: string[];
  weights: number[];
  threshold: number;
}

function createBaseTransaction(): Transaction {
  return {
    id: "",
    wallet: "",
    receiver: "",
    coins: [],
    signers: [],
    createdAt: 0,
  };
}

export const Transaction = {
  encode(
    message: Transaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.signers) {
      writer.uint32(42).string(v!);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.signers.push(reader.string());
          break;
        case 6:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    if (message.signers) {
      obj.signers = message.signers.map((e) => e);
    } else {
      obj.signers = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = Math.round(message.createdAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(
    object: I
  ): Transaction {
    const message = createBaseTransaction();
    message.id = object.id ?? "";
    message.wallet = object.wallet ?? "";
    message.receiver = object.receiver ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.signers = object.signers?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseWallet(): Wallet {
  return { address: "", owners: [], weights: [], threshold: 0 };
}

export const Wallet = {
  encode(
    message: Wallet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.weights) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(32).uint64(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weights.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.weights.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.threshold = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Wallet {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => String(e))
        : [],
      weights: Array.isArray(object?.weights)
        ? object.weights.map((e: any) => Number(e))
        : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => Math.round(e));
    } else {
      obj.weights = [];
    }
    message.threshold !== undefined &&
      (obj.threshold = Math.round(message.threshold));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Wallet>, I>>(object: I): Wallet {
    const message = createBaseWallet();
    message.address = object.address ?? "";
    message.owners = object.owners?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
