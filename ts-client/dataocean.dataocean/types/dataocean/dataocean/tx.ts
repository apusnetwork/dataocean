/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dataocean.dataocean";

export interface MsgCreateVideo {
  creator: string;
  title: string;
  description: string;
  coverLink: string;
  videoLink: string;
  priceMB: number;
}

export interface MsgCreateVideoResponse {
  id: number;
}

export interface MsgPlayVideo {
  creator: string;
  videoId: number;
}

export interface MsgPlayVideoResponse {
  url: string;
  exp: string;
}

function createBaseMsgCreateVideo(): MsgCreateVideo {
  return { creator: "", title: "", description: "", coverLink: "", videoLink: "", priceMB: 0 };
}

export const MsgCreateVideo = {
  encode(message: MsgCreateVideo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.coverLink !== "") {
      writer.uint32(34).string(message.coverLink);
    }
    if (message.videoLink !== "") {
      writer.uint32(42).string(message.videoLink);
    }
    if (message.priceMB !== 0) {
      writer.uint32(48).uint64(message.priceMB);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVideo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVideo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.coverLink = reader.string();
          break;
        case 5:
          message.videoLink = reader.string();
          break;
        case 6:
          message.priceMB = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVideo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      coverLink: isSet(object.coverLink) ? String(object.coverLink) : "",
      videoLink: isSet(object.videoLink) ? String(object.videoLink) : "",
      priceMB: isSet(object.priceMB) ? Number(object.priceMB) : 0,
    };
  },

  toJSON(message: MsgCreateVideo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.coverLink !== undefined && (obj.coverLink = message.coverLink);
    message.videoLink !== undefined && (obj.videoLink = message.videoLink);
    message.priceMB !== undefined && (obj.priceMB = Math.round(message.priceMB));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVideo>, I>>(object: I): MsgCreateVideo {
    const message = createBaseMsgCreateVideo();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.coverLink = object.coverLink ?? "";
    message.videoLink = object.videoLink ?? "";
    message.priceMB = object.priceMB ?? 0;
    return message;
  },
};

function createBaseMsgCreateVideoResponse(): MsgCreateVideoResponse {
  return { id: 0 };
}

export const MsgCreateVideoResponse = {
  encode(message: MsgCreateVideoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVideoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVideoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVideoResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateVideoResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVideoResponse>, I>>(object: I): MsgCreateVideoResponse {
    const message = createBaseMsgCreateVideoResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgPlayVideo(): MsgPlayVideo {
  return { creator: "", videoId: 0 };
}

export const MsgPlayVideo = {
  encode(message: MsgPlayVideo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.videoId !== 0) {
      writer.uint32(16).uint64(message.videoId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayVideo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayVideo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.videoId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlayVideo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      videoId: isSet(object.videoId) ? Number(object.videoId) : 0,
    };
  },

  toJSON(message: MsgPlayVideo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.videoId !== undefined && (obj.videoId = Math.round(message.videoId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayVideo>, I>>(object: I): MsgPlayVideo {
    const message = createBaseMsgPlayVideo();
    message.creator = object.creator ?? "";
    message.videoId = object.videoId ?? 0;
    return message;
  },
};

function createBaseMsgPlayVideoResponse(): MsgPlayVideoResponse {
  return { url: "", exp: "" };
}

export const MsgPlayVideoResponse = {
  encode(message: MsgPlayVideoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.exp !== "") {
      writer.uint32(18).string(message.exp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayVideoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayVideoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.exp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlayVideoResponse {
    return { url: isSet(object.url) ? String(object.url) : "", exp: isSet(object.exp) ? String(object.exp) : "" };
  },

  toJSON(message: MsgPlayVideoResponse): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.exp !== undefined && (obj.exp = message.exp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayVideoResponse>, I>>(object: I): MsgPlayVideoResponse {
    const message = createBaseMsgPlayVideoResponse();
    message.url = object.url ?? "";
    message.exp = object.exp ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateVideo(request: MsgCreateVideo): Promise<MsgCreateVideoResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  PlayVideo(request: MsgPlayVideo): Promise<MsgPlayVideoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVideo = this.CreateVideo.bind(this);
    this.PlayVideo = this.PlayVideo.bind(this);
  }
  CreateVideo(request: MsgCreateVideo): Promise<MsgCreateVideoResponse> {
    const data = MsgCreateVideo.encode(request).finish();
    const promise = this.rpc.request("dataocean.dataocean.Msg", "CreateVideo", data);
    return promise.then((data) => MsgCreateVideoResponse.decode(new _m0.Reader(data)));
  }

  PlayVideo(request: MsgPlayVideo): Promise<MsgPlayVideoResponse> {
    const data = MsgPlayVideo.encode(request).finish();
    const promise = this.rpc.request("dataocean.dataocean.Msg", "PlayVideo", data);
    return promise.then((data) => MsgPlayVideoResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
