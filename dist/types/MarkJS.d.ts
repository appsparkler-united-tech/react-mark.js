import { MarkOptions, RangeMarkerItem, RangesMarkerOptions, RegExpMarkerOptions, UnmarkOptions } from "../types";
export declare class MarkJS {
    constructor(el: Element);
    mark(str: string | string[], options?: MarkOptions): void;
    markRanges(ranges: RangeMarkerItem[], options?: RangesMarkerOptions): void;
    markRegExp(regExp: RegExp, options?: RegExpMarkerOptions): void;
    unmark(markOptions?: UnmarkOptions): void;
}
