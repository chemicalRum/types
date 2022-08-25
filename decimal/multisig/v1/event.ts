/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

export interface EventCreateWallet {
  sender: string;
  wallet: string;
  owners: string[];
  weights: number[];
  threshold: number;
}

export interface EventCreateTransaction {
  sender: string;
  wallet: string;
  receiver: string;
  coins: string;
  transaction: string;
}

export interface EventSignTransaction {
  sender: string;
  wallet: string;
  transaction: string;
  signerWeight: number;
  confirmations: number;
  confirmed: boolean;
}

function createBaseEventCreateWallet(): EventCreateWallet {
  return { sender: "", wallet: "", owners: [], weights: [], threshold: 0 };
}

export const EventCreateWallet = {
  encode(
    message: EventCreateWallet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    for (const v of message.owners) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.weights) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(40).uint64(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.owners.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weights.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.weights.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.threshold = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateWallet {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => String(e))
        : [],
      weights: Array.isArray(object?.weights)
        ? object.weights.map((e: any) => Number(e))
        : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: EventCreateWallet): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
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

  fromPartial<I extends Exact<DeepPartial<EventCreateWallet>, I>>(
    object: I
  ): EventCreateWallet {
    const message = createBaseEventCreateWallet();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.owners = object.owners?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseEventCreateTransaction(): EventCreateTransaction {
  return { sender: "", wallet: "", receiver: "", coins: "", transaction: "" };
}

export const EventCreateTransaction = {
  encode(
    message: EventCreateTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.coins !== "") {
      writer.uint32(34).string(message.coins);
    }
    if (message.transaction !== "") {
      writer.uint32(42).string(message.transaction);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreateTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.coins = reader.string();
          break;
        case 5:
          message.transaction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coins: isSet(object.coins) ? String(object.coins) : "",
      transaction: isSet(object.transaction) ? String(object.transaction) : "",
    };
  },

  toJSON(message: EventCreateTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coins !== undefined && (obj.coins = message.coins);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateTransaction>, I>>(
    object: I
  ): EventCreateTransaction {
    const message = createBaseEventCreateTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.receiver = object.receiver ?? "";
    message.coins = object.coins ?? "";
    message.transaction = object.transaction ?? "";
    return message;
  },
};

function createBaseEventSignTransaction(): EventSignTransaction {
  return {
    sender: "",
    wallet: "",
    transaction: "",
    signerWeight: 0,
    confirmations: 0,
    confirmed: false,
  };
}

export const EventSignTransaction = {
  encode(
    message: EventSignTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.signerWeight !== 0) {
      writer.uint32(32).uint64(message.signerWeight);
    }
    if (message.confirmations !== 0) {
      writer.uint32(40).uint64(message.confirmations);
    }
    if (message.confirmed === true) {
      writer.uint32(48).bool(message.confirmed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventSignTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.transaction = reader.string();
          break;
        case 4:
          message.signerWeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.confirmations = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.confirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSignTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      transaction: isSet(object.transaction) ? String(object.transaction) : "",
      signerWeight: isSet(object.signerWeight)
        ? Number(object.signerWeight)
        : 0,
      confirmations: isSet(object.confirmations)
        ? Number(object.confirmations)
        : 0,
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
    };
  },

  toJSON(message: EventSignTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.signerWeight !== undefined &&
      (obj.signerWeight = Math.round(message.signerWeight));
    message.confirmations !== undefined &&
      (obj.confirmations = Math.round(message.confirmations));
    message.confirmed !== undefined && (obj.confirmed = message.confirmed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignTransaction>, I>>(
    object: I
  ): EventSignTransaction {
    const message = createBaseEventSignTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.transaction = object.transaction ?? "";
    message.signerWeight = object.signerWeight ?? 0;
    message.confirmations = object.confirmations ?? 0;
    message.confirmed = object.confirmed ?? false;
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
