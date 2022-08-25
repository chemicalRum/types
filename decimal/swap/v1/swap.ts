/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

export interface Swap {
  hashedSecret: string;
  from: string;
  recipient: string;
  amount: Coin[];
  timestamp: number;
  redeemed: boolean;
  refunded: boolean;
}

export interface Chain {
  number: number;
  name: string;
  active: boolean;
}

export interface Params {
  lockedTimeOut: number;
  lockedTimeIn: number;
  serviceAddress: string;
  checkingAddress: string;
}

function createBaseSwap(): Swap {
  return {
    hashedSecret: "",
    from: "",
    recipient: "",
    amount: [],
    timestamp: 0,
    redeemed: false,
    refunded: false,
  };
}

export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashedSecret !== "") {
      writer.uint32(10).string(message.hashedSecret);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint64(message.timestamp);
    }
    if (message.redeemed === true) {
      writer.uint32(48).bool(message.redeemed);
    }
    if (message.refunded === true) {
      writer.uint32(56).bool(message.refunded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashedSecret = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.redeemed = reader.bool();
          break;
        case 7:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Swap {
    return {
      hashedSecret: isSet(object.hashedSecret)
        ? String(object.hashedSecret)
        : "",
      from: isSet(object.from) ? String(object.from) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      redeemed: isSet(object.redeemed) ? Boolean(object.redeemed) : false,
      refunded: isSet(object.refunded) ? Boolean(object.refunded) : false,
    };
  },

  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.hashedSecret !== undefined &&
      (obj.hashedSecret = message.hashedSecret);
    message.from !== undefined && (obj.from = message.from);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.redeemed !== undefined && (obj.redeemed = message.redeemed);
    message.refunded !== undefined && (obj.refunded = message.refunded);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swap>, I>>(object: I): Swap {
    const message = createBaseSwap();
    message.hashedSecret = object.hashedSecret ?? "";
    message.from = object.from ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? 0;
    message.redeemed = object.redeemed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
};

function createBaseChain(): Chain {
  return { number: 0, name: "", active: false };
}

export const Chain = {
  encode(message: Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chain {
    return {
      number: isSet(object.number) ? Number(object.number) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: Chain): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.name !== undefined && (obj.name = message.name);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chain>, I>>(object: I): Chain {
    const message = createBaseChain();
    message.number = object.number ?? 0;
    message.name = object.name ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseParams(): Params {
  return {
    lockedTimeOut: 0,
    lockedTimeIn: 0,
    serviceAddress: "",
    checkingAddress: "",
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockedTimeOut !== 0) {
      writer.uint32(8).int64(message.lockedTimeOut);
    }
    if (message.lockedTimeIn !== 0) {
      writer.uint32(16).int64(message.lockedTimeIn);
    }
    if (message.serviceAddress !== "") {
      writer.uint32(26).string(message.serviceAddress);
    }
    if (message.checkingAddress !== "") {
      writer.uint32(34).string(message.checkingAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedTimeOut = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.lockedTimeIn = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.serviceAddress = reader.string();
          break;
        case 4:
          message.checkingAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      lockedTimeOut: isSet(object.lockedTimeOut)
        ? Number(object.lockedTimeOut)
        : 0,
      lockedTimeIn: isSet(object.lockedTimeIn)
        ? Number(object.lockedTimeIn)
        : 0,
      serviceAddress: isSet(object.serviceAddress)
        ? String(object.serviceAddress)
        : "",
      checkingAddress: isSet(object.checkingAddress)
        ? String(object.checkingAddress)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.lockedTimeOut !== undefined &&
      (obj.lockedTimeOut = Math.round(message.lockedTimeOut));
    message.lockedTimeIn !== undefined &&
      (obj.lockedTimeIn = Math.round(message.lockedTimeIn));
    message.serviceAddress !== undefined &&
      (obj.serviceAddress = message.serviceAddress);
    message.checkingAddress !== undefined &&
      (obj.checkingAddress = message.checkingAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.lockedTimeOut = object.lockedTimeOut ?? 0;
    message.lockedTimeIn = object.lockedTimeIn ?? 0;
    message.serviceAddress = object.serviceAddress ?? "";
    message.checkingAddress = object.checkingAddress ?? "";
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
