/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Video } from "./video";
import { VideoLink } from "./video_link";

export const protobufPackage = "dataocean.dataocean";

/** GenesisState defines the dataocean module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  videoList: Video[];
  videoCount: number;
  /** this line is used by starport scaffolding # genesis/proto/state */
  videoLinkList: VideoLink[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, videoList: [], videoCount: 0, videoLinkList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.videoList) {
      Video.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.videoCount !== 0) {
      writer.uint32(24).uint64(message.videoCount);
    }
    for (const v of message.videoLinkList) {
      VideoLink.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.videoList.push(Video.decode(reader, reader.uint32()));
          break;
        case 3:
          message.videoCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.videoLinkList.push(VideoLink.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      videoList: Array.isArray(object?.videoList) ? object.videoList.map((e: any) => Video.fromJSON(e)) : [],
      videoCount: isSet(object.videoCount) ? Number(object.videoCount) : 0,
      videoLinkList: Array.isArray(object?.videoLinkList)
        ? object.videoLinkList.map((e: any) => VideoLink.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.videoList) {
      obj.videoList = message.videoList.map((e) => e ? Video.toJSON(e) : undefined);
    } else {
      obj.videoList = [];
    }
    message.videoCount !== undefined && (obj.videoCount = Math.round(message.videoCount));
    if (message.videoLinkList) {
      obj.videoLinkList = message.videoLinkList.map((e) => e ? VideoLink.toJSON(e) : undefined);
    } else {
      obj.videoLinkList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.videoList = object.videoList?.map((e) => Video.fromPartial(e)) || [];
    message.videoCount = object.videoCount ?? 0;
    message.videoLinkList = object.videoLinkList?.map((e) => VideoLink.fromPartial(e)) || [];
    return message;
  },
};

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
