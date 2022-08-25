/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Wallet, Transaction } from "./multisig";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

export interface QueryWalletsRequest {
  owner: string;
  pagination: PageRequest | undefined;
}

export interface QueryWalletsResponse {
  wallets: Wallet[];
  pagination: PageResponse | undefined;
}

export interface QueryWalletRequest {
  address: string;
}

export interface QueryWalletResponse {
  wallet: Wallet | undefined;
}

export interface QueryTransactionsRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryTransactionsResponse {
  transactions: Transaction[];
  pagination: PageResponse | undefined;
}

export interface QueryTransactionRequest {
  id: string;
}

export interface QueryTransactionResponse {
  transaction: Transaction | undefined;
}

function createBaseQueryWalletsRequest(): QueryWalletsRequest {
  return { owner: "", pagination: undefined };
}

export const QueryWalletsRequest = {
  encode(
    message: QueryWalletsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWalletsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWalletsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWalletsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWalletsRequest>, I>>(
    object: I
  ): QueryWalletsRequest {
    const message = createBaseQueryWalletsRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWalletsResponse(): QueryWalletsResponse {
  return { wallets: [], pagination: undefined };
}

export const QueryWalletsResponse = {
  encode(
    message: QueryWalletsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.wallets) {
      Wallet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWalletsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWalletsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallets.push(Wallet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWalletsResponse {
    return {
      wallets: Array.isArray(object?.wallets)
        ? object.wallets.map((e: any) => Wallet.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWalletsResponse): unknown {
    const obj: any = {};
    if (message.wallets) {
      obj.wallets = message.wallets.map((e) =>
        e ? Wallet.toJSON(e) : undefined
      );
    } else {
      obj.wallets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWalletsResponse>, I>>(
    object: I
  ): QueryWalletsResponse {
    const message = createBaseQueryWalletsResponse();
    message.wallets = object.wallets?.map((e) => Wallet.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWalletRequest(): QueryWalletRequest {
  return { address: "" };
}

export const QueryWalletRequest = {
  encode(
    message: QueryWalletRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWalletRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWalletRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryWalletRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWalletRequest>, I>>(
    object: I
  ): QueryWalletRequest {
    const message = createBaseQueryWalletRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryWalletResponse(): QueryWalletResponse {
  return { wallet: undefined };
}

export const QueryWalletResponse = {
  encode(
    message: QueryWalletResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wallet !== undefined) {
      Wallet.encode(message.wallet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWalletResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallet = Wallet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWalletResponse {
    return {
      wallet: isSet(object.wallet) ? Wallet.fromJSON(object.wallet) : undefined,
    };
  },

  toJSON(message: QueryWalletResponse): unknown {
    const obj: any = {};
    message.wallet !== undefined &&
      (obj.wallet = message.wallet ? Wallet.toJSON(message.wallet) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWalletResponse>, I>>(
    object: I
  ): QueryWalletResponse {
    const message = createBaseQueryWalletResponse();
    message.wallet =
      object.wallet !== undefined && object.wallet !== null
        ? Wallet.fromPartial(object.wallet)
        : undefined;
    return message;
  },
};

function createBaseQueryTransactionsRequest(): QueryTransactionsRequest {
  return { address: "", pagination: undefined };
}

export const QueryTransactionsRequest = {
  encode(
    message: QueryTransactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTransactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransactionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTransactionsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransactionsRequest>, I>>(
    object: I
  ): QueryTransactionsRequest {
    const message = createBaseQueryTransactionsRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTransactionsResponse(): QueryTransactionsResponse {
  return { transactions: [], pagination: undefined };
}

export const QueryTransactionsResponse = {
  encode(
    message: QueryTransactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTransactionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransactionsResponse {
    return {
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryTransactionsResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransactionsResponse>, I>>(
    object: I
  ): QueryTransactionsResponse {
    const message = createBaseQueryTransactionsResponse();
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTransactionRequest(): QueryTransactionRequest {
  return { id: "" };
}

export const QueryTransactionRequest = {
  encode(
    message: QueryTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransactionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryTransactionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransactionRequest>, I>>(
    object: I
  ): QueryTransactionRequest {
    const message = createBaseQueryTransactionRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryTransactionResponse(): QueryTransactionResponse {
  return { transaction: undefined };
}

export const QueryTransactionResponse = {
  encode(
    message: QueryTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(
        message.transaction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = Transaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransactionResponse {
    return {
      transaction: isSet(object.transaction)
        ? Transaction.fromJSON(object.transaction)
        : undefined,
    };
  },

  toJSON(message: QueryTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction
        ? Transaction.toJSON(message.transaction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransactionResponse>, I>>(
    object: I
  ): QueryTransactionResponse {
    const message = createBaseQueryTransactionResponse();
    message.transaction =
      object.transaction !== undefined && object.transaction !== null
        ? Transaction.fromPartial(object.transaction)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves existing wallets by owner address. */
  Wallets(request: QueryWalletsRequest): Promise<QueryWalletsResponse>;
  /** Retrieves existing wallet by address. */
  Wallet(request: QueryWalletRequest): Promise<QueryWalletResponse>;
  /** Retrieves existing transactions by wallet address. */
  Transactions(
    request: QueryTransactionsRequest
  ): Promise<QueryTransactionsResponse>;
  /** Retrieves existing transaction by id. */
  Transaction(
    request: QueryTransactionRequest
  ): Promise<QueryTransactionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Wallets = this.Wallets.bind(this);
    this.Wallet = this.Wallet.bind(this);
    this.Transactions = this.Transactions.bind(this);
    this.Transaction = this.Transaction.bind(this);
  }
  Wallets(request: QueryWalletsRequest): Promise<QueryWalletsResponse> {
    const data = QueryWalletsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Query",
      "Wallets",
      data
    );
    return promise.then((data) =>
      QueryWalletsResponse.decode(new _m0.Reader(data))
    );
  }

  Wallet(request: QueryWalletRequest): Promise<QueryWalletResponse> {
    const data = QueryWalletRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Query",
      "Wallet",
      data
    );
    return promise.then((data) =>
      QueryWalletResponse.decode(new _m0.Reader(data))
    );
  }

  Transactions(
    request: QueryTransactionsRequest
  ): Promise<QueryTransactionsResponse> {
    const data = QueryTransactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Query",
      "Transactions",
      data
    );
    return promise.then((data) =>
      QueryTransactionsResponse.decode(new _m0.Reader(data))
    );
  }

  Transaction(
    request: QueryTransactionRequest
  ): Promise<QueryTransactionResponse> {
    const data = QueryTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Query",
      "Transaction",
      data
    );
    return promise.then((data) =>
      QueryTransactionResponse.decode(new _m0.Reader(data))
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
