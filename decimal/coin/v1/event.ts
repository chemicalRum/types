/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

export interface EventCreateCoin {
  sender: string;
  symbol: string;
  title: string;
  crr: number;
  initialVolume: string;
  initialReserve: string;
  limitVolume: string;
  identity: string;
  commissionCreateCoin: string;
}

export interface EventUpdateCoin {
  sender: string;
  symbol: string;
  limitVolume: string;
  identity: string;
}

export interface EventSendCoin {
  sender: string;
  receiver: string;
  coin: string;
}

export interface EventBuySellCoin {
  sender: string;
  coinToBuy: string;
  coinToSell: string;
  amountInBaseCoin: string;
}

export interface EventEditCoin {
  symbol: string;
  volume: string;
  reserve: string;
}

export interface EventBurnCoin {
  sender: string;
  coin: string;
}

export interface EventRedeemCheck {
  sender: string;
  issuer: string;
  coin: string;
  nonce: string;
  dueBlock: string;
  commissionRedeemCheck: string;
}

function createBaseEventCreateCoin(): EventCreateCoin {
  return {
    sender: "",
    symbol: "",
    title: "",
    crr: 0,
    initialVolume: "",
    initialReserve: "",
    limitVolume: "",
    identity: "",
    commissionCreateCoin: "",
  };
}

export const EventCreateCoin = {
  encode(
    message: EventCreateCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.crr !== 0) {
      writer.uint32(32).uint64(message.crr);
    }
    if (message.initialVolume !== "") {
      writer.uint32(42).string(message.initialVolume);
    }
    if (message.initialReserve !== "") {
      writer.uint32(50).string(message.initialReserve);
    }
    if (message.limitVolume !== "") {
      writer.uint32(58).string(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(66).string(message.identity);
    }
    if (message.commissionCreateCoin !== "") {
      writer.uint32(74).string(message.commissionCreateCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.crr = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.initialVolume = reader.string();
          break;
        case 6:
          message.initialReserve = reader.string();
          break;
        case 7:
          message.limitVolume = reader.string();
          break;
        case 8:
          message.identity = reader.string();
          break;
        case 9:
          message.commissionCreateCoin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      title: isSet(object.title) ? String(object.title) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      initialVolume: isSet(object.initialVolume)
        ? String(object.initialVolume)
        : "",
      initialReserve: isSet(object.initialReserve)
        ? String(object.initialReserve)
        : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      commissionCreateCoin: isSet(object.commissionCreateCoin)
        ? String(object.commissionCreateCoin)
        : "",
    };
  },

  toJSON(message: EventCreateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.title !== undefined && (obj.title = message.title);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.initialVolume !== undefined &&
      (obj.initialVolume = message.initialVolume);
    message.initialReserve !== undefined &&
      (obj.initialReserve = message.initialReserve);
    message.limitVolume !== undefined &&
      (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    message.commissionCreateCoin !== undefined &&
      (obj.commissionCreateCoin = message.commissionCreateCoin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateCoin>, I>>(
    object: I
  ): EventCreateCoin {
    const message = createBaseEventCreateCoin();
    message.sender = object.sender ?? "";
    message.symbol = object.symbol ?? "";
    message.title = object.title ?? "";
    message.crr = object.crr ?? 0;
    message.initialVolume = object.initialVolume ?? "";
    message.initialReserve = object.initialReserve ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    message.commissionCreateCoin = object.commissionCreateCoin ?? "";
    return message;
  },
};

function createBaseEventUpdateCoin(): EventUpdateCoin {
  return { sender: "", symbol: "", limitVolume: "", identity: "" };
}

export const EventUpdateCoin = {
  encode(
    message: EventUpdateCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.limitVolume !== "") {
      writer.uint32(26).string(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.limitVolume = reader.string();
          break;
        case 4:
          message.identity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: EventUpdateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.limitVolume !== undefined &&
      (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCoin>, I>>(
    object: I
  ): EventUpdateCoin {
    const message = createBaseEventUpdateCoin();
    message.sender = object.sender ?? "";
    message.symbol = object.symbol ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseEventSendCoin(): EventSendCoin {
  return { sender: "", receiver: "", coin: "" };
}

export const EventSendCoin = {
  encode(
    message: EventSendCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSendCoin>, I>>(
    object: I
  ): EventSendCoin {
    const message = createBaseEventSendCoin();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventBuySellCoin(): EventBuySellCoin {
  return { sender: "", coinToBuy: "", coinToSell: "", amountInBaseCoin: "" };
}

export const EventBuySellCoin = {
  encode(
    message: EventBuySellCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToBuy !== "") {
      writer.uint32(18).string(message.coinToBuy);
    }
    if (message.coinToSell !== "") {
      writer.uint32(26).string(message.coinToSell);
    }
    if (message.amountInBaseCoin !== "") {
      writer.uint32(34).string(message.amountInBaseCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuySellCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuySellCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToBuy = reader.string();
          break;
        case 3:
          message.coinToSell = reader.string();
          break;
        case 4:
          message.amountInBaseCoin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBuySellCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToBuy: isSet(object.coinToBuy) ? String(object.coinToBuy) : "",
      coinToSell: isSet(object.coinToSell) ? String(object.coinToSell) : "",
      amountInBaseCoin: isSet(object.amountInBaseCoin)
        ? String(object.amountInBaseCoin)
        : "",
    };
  },

  toJSON(message: EventBuySellCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToBuy !== undefined && (obj.coinToBuy = message.coinToBuy);
    message.coinToSell !== undefined && (obj.coinToSell = message.coinToSell);
    message.amountInBaseCoin !== undefined &&
      (obj.amountInBaseCoin = message.amountInBaseCoin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBuySellCoin>, I>>(
    object: I
  ): EventBuySellCoin {
    const message = createBaseEventBuySellCoin();
    message.sender = object.sender ?? "";
    message.coinToBuy = object.coinToBuy ?? "";
    message.coinToSell = object.coinToSell ?? "";
    message.amountInBaseCoin = object.amountInBaseCoin ?? "";
    return message;
  },
};

function createBaseEventEditCoin(): EventEditCoin {
  return { symbol: "", volume: "", reserve: "" };
}

export const EventEditCoin = {
  encode(
    message: EventEditCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(message.volume);
    }
    if (message.reserve !== "") {
      writer.uint32(26).string(message.reserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.volume = reader.string();
          break;
        case 3:
          message.reserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEditCoin {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
    };
  },

  toJSON(message: EventEditCoin): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.volume !== undefined && (obj.volume = message.volume);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditCoin>, I>>(
    object: I
  ): EventEditCoin {
    const message = createBaseEventEditCoin();
    message.symbol = object.symbol ?? "";
    message.volume = object.volume ?? "";
    message.reserve = object.reserve ?? "";
    return message;
  },
};

function createBaseEventBurnCoin(): EventBurnCoin {
  return { sender: "", coin: "" };
}

export const EventBurnCoin = {
  encode(
    message: EventBurnCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurnCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventBurnCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnCoin>, I>>(
    object: I
  ): EventBurnCoin {
    const message = createBaseEventBurnCoin();
    message.sender = object.sender ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventRedeemCheck(): EventRedeemCheck {
  return {
    sender: "",
    issuer: "",
    coin: "",
    nonce: "",
    dueBlock: "",
    commissionRedeemCheck: "",
  };
}

export const EventRedeemCheck = {
  encode(
    message: EventRedeemCheck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    if (message.dueBlock !== "") {
      writer.uint32(42).string(message.dueBlock);
    }
    if (message.commissionRedeemCheck !== "") {
      writer.uint32(50).string(message.commissionRedeemCheck);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemCheck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedeemCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        case 5:
          message.dueBlock = reader.string();
          break;
        case 6:
          message.commissionRedeemCheck = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedeemCheck {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      dueBlock: isSet(object.dueBlock) ? String(object.dueBlock) : "",
      commissionRedeemCheck: isSet(object.commissionRedeemCheck)
        ? String(object.commissionRedeemCheck)
        : "",
    };
  },

  toJSON(message: EventRedeemCheck): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.coin !== undefined && (obj.coin = message.coin);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.dueBlock !== undefined && (obj.dueBlock = message.dueBlock);
    message.commissionRedeemCheck !== undefined &&
      (obj.commissionRedeemCheck = message.commissionRedeemCheck);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedeemCheck>, I>>(
    object: I
  ): EventRedeemCheck {
    const message = createBaseEventRedeemCheck();
    message.sender = object.sender ?? "";
    message.issuer = object.issuer ?? "";
    message.coin = object.coin ?? "";
    message.nonce = object.nonce ?? "";
    message.dueBlock = object.dueBlock ?? "";
    message.commissionRedeemCheck = object.commissionRedeemCheck ?? "";
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
