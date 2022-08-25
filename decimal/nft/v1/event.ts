/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface EventMintNFT {
  sender: string;
  recipient: string;
  /** aka collection */
  denom: string;
  /** aka id, token_id */
  nftId: string;
  tokenUri: string;
  allowMint: boolean;
  reserve: string;
  subTokenIds: number[];
}

export interface EventTransferNFT {
  sender: string;
  recipient: string;
  denom: string;
  nftId: string;
  subTokenIds: number[];
}

export interface EventEditNFT {
  sender: string;
  denom: string;
  nftId: string;
  tokenUri: string;
}

export interface EventBurnNFT {
  sender: string;
  denom: string;
  nftId: string;
  subTokenIds: number[];
}

export interface EventUpdateReserveNFT {
  sender: string;
  denom: string;
  nftId: string;
  subTokenIds: number[];
  newReserve: Coin | undefined;
}

function createBaseEventMintNFT(): EventMintNFT {
  return {
    sender: "",
    recipient: "",
    denom: "",
    nftId: "",
    tokenUri: "",
    allowMint: false,
    reserve: "",
    subTokenIds: [],
  };
}

export const EventMintNFT = {
  encode(
    message: EventMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.nftId !== "") {
      writer.uint32(34).string(message.nftId);
    }
    if (message.tokenUri !== "") {
      writer.uint32(42).string(message.tokenUri);
    }
    if (message.allowMint === true) {
      writer.uint32(48).bool(message.allowMint);
    }
    if (message.reserve !== "") {
      writer.uint32(58).string(message.reserve);
    }
    writer.uint32(66).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.nftId = reader.string();
          break;
        case 5:
          message.tokenUri = reader.string();
          break;
        case 6:
          message.allowMint = reader.bool();
          break;
        case 7:
          message.reserve = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMintNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EventMintNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.denom !== undefined && (obj.denom = message.denom);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintNFT>, I>>(
    object: I
  ): EventMintNFT {
    const message = createBaseEventMintNFT();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.tokenUri = object.tokenUri ?? "";
    message.allowMint = object.allowMint ?? false;
    message.reserve = object.reserve ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventTransferNFT(): EventTransferNFT {
  return { sender: "", recipient: "", denom: "", nftId: "", subTokenIds: [] };
}

export const EventTransferNFT = {
  encode(
    message: EventTransferNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.nftId !== "") {
      writer.uint32(34).string(message.nftId);
    }
    writer.uint32(66).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.nftId = reader.string();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTransferNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EventTransferNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.denom !== undefined && (obj.denom = message.denom);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransferNFT>, I>>(
    object: I
  ): EventTransferNFT {
    const message = createBaseEventTransferNFT();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventEditNFT(): EventEditNFT {
  return { sender: "", denom: "", nftId: "", tokenUri: "" };
}

export const EventEditNFT = {
  encode(
    message: EventEditNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEditNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
    };
  },

  toJSON(message: EventEditNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditNFT>, I>>(
    object: I
  ): EventEditNFT {
    const message = createBaseEventEditNFT();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.tokenUri = object.tokenUri ?? "";
    return message;
  },
};

function createBaseEventBurnNFT(): EventBurnNFT {
  return { sender: "", denom: "", nftId: "", subTokenIds: [] };
}

export const EventBurnNFT = {
  encode(
    message: EventBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurnNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EventBurnNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnNFT>, I>>(
    object: I
  ): EventBurnNFT {
    const message = createBaseEventBurnNFT();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventUpdateReserveNFT(): EventUpdateReserveNFT {
  return {
    sender: "",
    denom: "",
    nftId: "",
    subTokenIds: [],
    newReserve: undefined,
  };
}

export const EventUpdateReserveNFT = {
  encode(
    message: EventUpdateReserveNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.newReserve !== undefined) {
      Coin.encode(message.newReserve, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateReserveNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateReserveNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.newReserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateReserveNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
      newReserve: isSet(object.newReserve)
        ? Coin.fromJSON(object.newReserve)
        : undefined,
    };
  },

  toJSON(message: EventUpdateReserveNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    message.newReserve !== undefined &&
      (obj.newReserve = message.newReserve
        ? Coin.toJSON(message.newReserve)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateReserveNFT>, I>>(
    object: I
  ): EventUpdateReserveNFT {
    const message = createBaseEventUpdateReserveNFT();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    message.newReserve =
      object.newReserve !== undefined && object.newReserve !== null
        ? Coin.fromPartial(object.newReserve)
        : undefined;
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
