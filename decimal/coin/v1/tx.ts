/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

export interface MsgCreateCoin {
  sender: string;
  title: string;
  symbol: string;
  crr: number;
  initialVolume: Uint8Array;
  initialReserve: Uint8Array;
  limitVolume: Uint8Array;
  identity: string;
}

export interface MsgCreateCoinResponse {}

export interface MsgUpdateCoin {
  sender: string;
  symbol: string;
  limitVolume: Uint8Array;
  identity: string;
}

export interface MsgUpdateCoinResponse {}

export interface Send {
  coin: Coin | undefined;
  receiver: string;
}

export interface MsgMultiSendCoin {
  sender: string;
  sends: Send[];
}

export interface MsgMultiSendCoinResponse {}

export interface MsgBuyCoin {
  sender: string;
  coinToBuy: Coin | undefined;
  maxCoinToSell: Coin | undefined;
}

export interface MsgBuyCoinResponse {}

export interface MsgSellCoin {
  sender: string;
  coinToSell: Coin | undefined;
  minCoinToBuy: Coin | undefined;
}

export interface MsgSellCoinResponse {}

export interface MsgSellAllCoin {
  sender: string;
  coinSymbolToSell: string;
  minCoinToBuy: Coin | undefined;
}

export interface MsgSellAllCoinResponse {}

export interface MsgSendCoin {
  sender: string;
  receiver: string;
  coin: Coin | undefined;
}

export interface MsgSendCoinResponse {}

export interface MsgBurnCoin {
  sender: string;
  coin: Coin | undefined;
}

export interface MsgBurnCoinResponse {}

export interface MsgRedeemCheck {
  sender: string;
  check: string;
  proof: string;
}

export interface MsgRedeemCheckResponse {}

function createBaseMsgCreateCoin(): MsgCreateCoin {
  return {
    sender: "",
    title: "",
    symbol: "",
    crr: 0,
    initialVolume: new Uint8Array(),
    initialReserve: new Uint8Array(),
    limitVolume: new Uint8Array(),
    identity: "",
  };
}

export const MsgCreateCoin = {
  encode(
    message: MsgCreateCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.crr !== 0) {
      writer.uint32(32).uint64(message.crr);
    }
    if (message.initialVolume.length !== 0) {
      writer.uint32(42).bytes(message.initialVolume);
    }
    if (message.initialReserve.length !== 0) {
      writer.uint32(50).bytes(message.initialReserve);
    }
    if (message.limitVolume.length !== 0) {
      writer.uint32(58).bytes(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(66).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.crr = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.initialVolume = reader.bytes();
          break;
        case 6:
          message.initialReserve = reader.bytes();
          break;
        case 7:
          message.limitVolume = reader.bytes();
          break;
        case 8:
          message.identity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      title: isSet(object.title) ? String(object.title) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      initialVolume: isSet(object.initialVolume)
        ? bytesFromBase64(object.initialVolume)
        : new Uint8Array(),
      initialReserve: isSet(object.initialReserve)
        ? bytesFromBase64(object.initialReserve)
        : new Uint8Array(),
      limitVolume: isSet(object.limitVolume)
        ? bytesFromBase64(object.limitVolume)
        : new Uint8Array(),
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: MsgCreateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.title !== undefined && (obj.title = message.title);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.initialVolume !== undefined &&
      (obj.initialVolume = base64FromBytes(
        message.initialVolume !== undefined
          ? message.initialVolume
          : new Uint8Array()
      ));
    message.initialReserve !== undefined &&
      (obj.initialReserve = base64FromBytes(
        message.initialReserve !== undefined
          ? message.initialReserve
          : new Uint8Array()
      ));
    message.limitVolume !== undefined &&
      (obj.limitVolume = base64FromBytes(
        message.limitVolume !== undefined
          ? message.limitVolume
          : new Uint8Array()
      ));
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCoin>, I>>(
    object: I
  ): MsgCreateCoin {
    const message = createBaseMsgCreateCoin();
    message.sender = object.sender ?? "";
    message.title = object.title ?? "";
    message.symbol = object.symbol ?? "";
    message.crr = object.crr ?? 0;
    message.initialVolume = object.initialVolume ?? new Uint8Array();
    message.initialReserve = object.initialReserve ?? new Uint8Array();
    message.limitVolume = object.limitVolume ?? new Uint8Array();
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgCreateCoinResponse(): MsgCreateCoinResponse {
  return {};
}

export const MsgCreateCoinResponse = {
  encode(
    _: MsgCreateCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCoinResponse {
    return {};
  },

  toJSON(_: MsgCreateCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCoinResponse>, I>>(
    _: I
  ): MsgCreateCoinResponse {
    const message = createBaseMsgCreateCoinResponse();
    return message;
  },
};

function createBaseMsgUpdateCoin(): MsgUpdateCoin {
  return {
    sender: "",
    symbol: "",
    limitVolume: new Uint8Array(),
    identity: "",
  };
}

export const MsgUpdateCoin = {
  encode(
    message: MsgUpdateCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.limitVolume.length !== 0) {
      writer.uint32(26).bytes(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoin();
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
          message.limitVolume = reader.bytes();
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

  fromJSON(object: any): MsgUpdateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      limitVolume: isSet(object.limitVolume)
        ? bytesFromBase64(object.limitVolume)
        : new Uint8Array(),
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: MsgUpdateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.limitVolume !== undefined &&
      (obj.limitVolume = base64FromBytes(
        message.limitVolume !== undefined
          ? message.limitVolume
          : new Uint8Array()
      ));
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoin>, I>>(
    object: I
  ): MsgUpdateCoin {
    const message = createBaseMsgUpdateCoin();
    message.sender = object.sender ?? "";
    message.symbol = object.symbol ?? "";
    message.limitVolume = object.limitVolume ?? new Uint8Array();
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseMsgUpdateCoinResponse(): MsgUpdateCoinResponse {
  return {};
}

export const MsgUpdateCoinResponse = {
  encode(
    _: MsgUpdateCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCoinResponse {
    return {};
  },

  toJSON(_: MsgUpdateCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoinResponse>, I>>(
    _: I
  ): MsgUpdateCoinResponse {
    const message = createBaseMsgUpdateCoinResponse();
    return message;
  },
};

function createBaseSend(): Send {
  return { coin: undefined, receiver: "" };
}

export const Send = {
  encode(message: Send, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Send {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Send {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: Send): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Send>, I>>(object: I): Send {
    const message = createBaseSend();
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseMsgMultiSendCoin(): MsgMultiSendCoin {
  return { sender: "", sends: [] };
}

export const MsgMultiSendCoin = {
  encode(
    message: MsgMultiSendCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.sends) {
      Send.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.sends.push(Send.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sends: Array.isArray(object?.sends)
        ? object.sends.map((e: any) => Send.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMultiSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.sends) {
      obj.sends = message.sends.map((e) => (e ? Send.toJSON(e) : undefined));
    } else {
      obj.sends = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSendCoin>, I>>(
    object: I
  ): MsgMultiSendCoin {
    const message = createBaseMsgMultiSendCoin();
    message.sender = object.sender ?? "";
    message.sends = object.sends?.map((e) => Send.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMultiSendCoinResponse(): MsgMultiSendCoinResponse {
  return {};
}

export const MsgMultiSendCoinResponse = {
  encode(
    _: MsgMultiSendCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMultiSendCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMultiSendCoinResponse {
    return {};
  },

  toJSON(_: MsgMultiSendCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSendCoinResponse>, I>>(
    _: I
  ): MsgMultiSendCoinResponse {
    const message = createBaseMsgMultiSendCoinResponse();
    return message;
  },
};

function createBaseMsgBuyCoin(): MsgBuyCoin {
  return { sender: "", coinToBuy: undefined, maxCoinToSell: undefined };
}

export const MsgBuyCoin = {
  encode(
    message: MsgBuyCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToBuy !== undefined) {
      Coin.encode(message.coinToBuy, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxCoinToSell !== undefined) {
      Coin.encode(message.maxCoinToSell, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToBuy = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxCoinToSell = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToBuy: isSet(object.coinToBuy)
        ? Coin.fromJSON(object.coinToBuy)
        : undefined,
      maxCoinToSell: isSet(object.maxCoinToSell)
        ? Coin.fromJSON(object.maxCoinToSell)
        : undefined,
    };
  },

  toJSON(message: MsgBuyCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToBuy !== undefined &&
      (obj.coinToBuy = message.coinToBuy
        ? Coin.toJSON(message.coinToBuy)
        : undefined);
    message.maxCoinToSell !== undefined &&
      (obj.maxCoinToSell = message.maxCoinToSell
        ? Coin.toJSON(message.maxCoinToSell)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCoin>, I>>(
    object: I
  ): MsgBuyCoin {
    const message = createBaseMsgBuyCoin();
    message.sender = object.sender ?? "";
    message.coinToBuy =
      object.coinToBuy !== undefined && object.coinToBuy !== null
        ? Coin.fromPartial(object.coinToBuy)
        : undefined;
    message.maxCoinToSell =
      object.maxCoinToSell !== undefined && object.maxCoinToSell !== null
        ? Coin.fromPartial(object.maxCoinToSell)
        : undefined;
    return message;
  },
};

function createBaseMsgBuyCoinResponse(): MsgBuyCoinResponse {
  return {};
}

export const MsgBuyCoinResponse = {
  encode(
    _: MsgBuyCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyCoinResponse {
    return {};
  },

  toJSON(_: MsgBuyCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCoinResponse>, I>>(
    _: I
  ): MsgBuyCoinResponse {
    const message = createBaseMsgBuyCoinResponse();
    return message;
  },
};

function createBaseMsgSellCoin(): MsgSellCoin {
  return { sender: "", coinToSell: undefined, minCoinToBuy: undefined };
}

export const MsgSellCoin = {
  encode(
    message: MsgSellCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToSell !== undefined) {
      Coin.encode(message.coinToSell, writer.uint32(18).fork()).ldelim();
    }
    if (message.minCoinToBuy !== undefined) {
      Coin.encode(message.minCoinToBuy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToSell = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minCoinToBuy = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToSell: isSet(object.coinToSell)
        ? Coin.fromJSON(object.coinToSell)
        : undefined,
      minCoinToBuy: isSet(object.minCoinToBuy)
        ? Coin.fromJSON(object.minCoinToBuy)
        : undefined,
    };
  },

  toJSON(message: MsgSellCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToSell !== undefined &&
      (obj.coinToSell = message.coinToSell
        ? Coin.toJSON(message.coinToSell)
        : undefined);
    message.minCoinToBuy !== undefined &&
      (obj.minCoinToBuy = message.minCoinToBuy
        ? Coin.toJSON(message.minCoinToBuy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellCoin>, I>>(
    object: I
  ): MsgSellCoin {
    const message = createBaseMsgSellCoin();
    message.sender = object.sender ?? "";
    message.coinToSell =
      object.coinToSell !== undefined && object.coinToSell !== null
        ? Coin.fromPartial(object.coinToSell)
        : undefined;
    message.minCoinToBuy =
      object.minCoinToBuy !== undefined && object.minCoinToBuy !== null
        ? Coin.fromPartial(object.minCoinToBuy)
        : undefined;
    return message;
  },
};

function createBaseMsgSellCoinResponse(): MsgSellCoinResponse {
  return {};
}

export const MsgSellCoinResponse = {
  encode(
    _: MsgSellCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSellCoinResponse {
    return {};
  },

  toJSON(_: MsgSellCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellCoinResponse>, I>>(
    _: I
  ): MsgSellCoinResponse {
    const message = createBaseMsgSellCoinResponse();
    return message;
  },
};

function createBaseMsgSellAllCoin(): MsgSellAllCoin {
  return { sender: "", coinSymbolToSell: "", minCoinToBuy: undefined };
}

export const MsgSellAllCoin = {
  encode(
    message: MsgSellAllCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinSymbolToSell !== "") {
      writer.uint32(18).string(message.coinSymbolToSell);
    }
    if (message.minCoinToBuy !== undefined) {
      Coin.encode(message.minCoinToBuy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellAllCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellAllCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinSymbolToSell = reader.string();
          break;
        case 3:
          message.minCoinToBuy = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellAllCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinSymbolToSell: isSet(object.coinSymbolToSell)
        ? String(object.coinSymbolToSell)
        : "",
      minCoinToBuy: isSet(object.minCoinToBuy)
        ? Coin.fromJSON(object.minCoinToBuy)
        : undefined,
    };
  },

  toJSON(message: MsgSellAllCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinSymbolToSell !== undefined &&
      (obj.coinSymbolToSell = message.coinSymbolToSell);
    message.minCoinToBuy !== undefined &&
      (obj.minCoinToBuy = message.minCoinToBuy
        ? Coin.toJSON(message.minCoinToBuy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellAllCoin>, I>>(
    object: I
  ): MsgSellAllCoin {
    const message = createBaseMsgSellAllCoin();
    message.sender = object.sender ?? "";
    message.coinSymbolToSell = object.coinSymbolToSell ?? "";
    message.minCoinToBuy =
      object.minCoinToBuy !== undefined && object.minCoinToBuy !== null
        ? Coin.fromPartial(object.minCoinToBuy)
        : undefined;
    return message;
  },
};

function createBaseMsgSellAllCoinResponse(): MsgSellAllCoinResponse {
  return {};
}

export const MsgSellAllCoinResponse = {
  encode(
    _: MsgSellAllCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSellAllCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellAllCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSellAllCoinResponse {
    return {};
  },

  toJSON(_: MsgSellAllCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellAllCoinResponse>, I>>(
    _: I
  ): MsgSellAllCoinResponse {
    const message = createBaseMsgSellAllCoinResponse();
    return message;
  },
};

function createBaseMsgSendCoin(): MsgSendCoin {
  return { sender: "", receiver: "", coin: undefined };
}

export const MsgSendCoin = {
  encode(
    message: MsgSendCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCoin();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCoin>, I>>(
    object: I
  ): MsgSendCoin {
    const message = createBaseMsgSendCoin();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgSendCoinResponse(): MsgSendCoinResponse {
  return {};
}

export const MsgSendCoinResponse = {
  encode(
    _: MsgSendCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendCoinResponse {
    return {};
  },

  toJSON(_: MsgSendCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCoinResponse>, I>>(
    _: I
  ): MsgSendCoinResponse {
    const message = createBaseMsgSendCoinResponse();
    return message;
  },
};

function createBaseMsgBurnCoin(): MsgBurnCoin {
  return { sender: "", coin: undefined };
}

export const MsgBurnCoin = {
  encode(
    message: MsgBurnCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgBurnCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoin>, I>>(
    object: I
  ): MsgBurnCoin {
    const message = createBaseMsgBurnCoin();
    message.sender = object.sender ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgBurnCoinResponse(): MsgBurnCoinResponse {
  return {};
}

export const MsgBurnCoinResponse = {
  encode(
    _: MsgBurnCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnCoinResponse {
    return {};
  },

  toJSON(_: MsgBurnCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoinResponse>, I>>(
    _: I
  ): MsgBurnCoinResponse {
    const message = createBaseMsgBurnCoinResponse();
    return message;
  },
};

function createBaseMsgRedeemCheck(): MsgRedeemCheck {
  return { sender: "", check: "", proof: "" };
}

export const MsgRedeemCheck = {
  encode(
    message: MsgRedeemCheck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.check !== "") {
      writer.uint32(18).string(message.check);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCheck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.check = reader.string();
          break;
        case 3:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCheck {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      check: isSet(object.check) ? String(object.check) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
    };
  },

  toJSON(message: MsgRedeemCheck): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.check !== undefined && (obj.check = message.check);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCheck>, I>>(
    object: I
  ): MsgRedeemCheck {
    const message = createBaseMsgRedeemCheck();
    message.sender = object.sender ?? "";
    message.check = object.check ?? "";
    message.proof = object.proof ?? "";
    return message;
  },
};

function createBaseMsgRedeemCheckResponse(): MsgRedeemCheckResponse {
  return {};
}

export const MsgRedeemCheckResponse = {
  encode(
    _: MsgRedeemCheckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedeemCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRedeemCheckResponse {
    return {};
  },

  toJSON(_: MsgRedeemCheckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCheckResponse>, I>>(
    _: I
  ): MsgRedeemCheckResponse {
    const message = createBaseMsgRedeemCheckResponse();
    return message;
  },
};

/** Msg defines the coin Msg service. */
export interface Msg {
  /** CreateCoin defines message for new coin creation. */
  CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse>;
  /** UpdateCoin defines message for modifying existing coin. */
  UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse>;
  /** SendCoin defines message for transfering specific coin. */
  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
  /** MultiSendCoin defines message for transfering specific coins as a batch. */
  MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse>;
  /** BuyCoin defines message for buying specific coin. */
  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse>;
  /** SellCoin defines message for selling specific coin. */
  SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse>;
  /** SellAllCoin defines message for selling all specific coin. */
  SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse>;
  /** BurnCoin defines message for burning specific coin amount. */
  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse>;
  /** RedeemCheck defines message for redeeming checks. */
  RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCoin = this.CreateCoin.bind(this);
    this.UpdateCoin = this.UpdateCoin.bind(this);
    this.SendCoin = this.SendCoin.bind(this);
    this.MultiSendCoin = this.MultiSendCoin.bind(this);
    this.BuyCoin = this.BuyCoin.bind(this);
    this.SellCoin = this.SellCoin.bind(this);
    this.SellAllCoin = this.SellAllCoin.bind(this);
    this.BurnCoin = this.BurnCoin.bind(this);
    this.RedeemCheck = this.RedeemCheck.bind(this);
  }
  CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse> {
    const data = MsgCreateCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "CreateCoin", data);
    return promise.then((data) =>
      MsgCreateCoinResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse> {
    const data = MsgUpdateCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "UpdateCoin", data);
    return promise.then((data) =>
      MsgUpdateCoinResponse.decode(new _m0.Reader(data))
    );
  }

  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse> {
    const data = MsgSendCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "SendCoin", data);
    return promise.then((data) =>
      MsgSendCoinResponse.decode(new _m0.Reader(data))
    );
  }

  MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse> {
    const data = MsgMultiSendCoin.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.coin.v1.Msg",
      "MultiSendCoin",
      data
    );
    return promise.then((data) =>
      MsgMultiSendCoinResponse.decode(new _m0.Reader(data))
    );
  }

  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse> {
    const data = MsgBuyCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "BuyCoin", data);
    return promise.then((data) =>
      MsgBuyCoinResponse.decode(new _m0.Reader(data))
    );
  }

  SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse> {
    const data = MsgSellCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "SellCoin", data);
    return promise.then((data) =>
      MsgSellCoinResponse.decode(new _m0.Reader(data))
    );
  }

  SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse> {
    const data = MsgSellAllCoin.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.coin.v1.Msg",
      "SellAllCoin",
      data
    );
    return promise.then((data) =>
      MsgSellAllCoinResponse.decode(new _m0.Reader(data))
    );
  }

  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse> {
    const data = MsgBurnCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "BurnCoin", data);
    return promise.then((data) =>
      MsgBurnCoinResponse.decode(new _m0.Reader(data))
    );
  }

  RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse> {
    const data = MsgRedeemCheck.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.coin.v1.Msg",
      "RedeemCheck",
      data
    );
    return promise.then((data) =>
      MsgRedeemCheckResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
