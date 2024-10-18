/// <reference types="react" />
import { MarkJS as MarkJSType } from "../../types";
/**
 * @public
 */
export interface UseMarkerRes<T = HTMLDivElement> {
    marker: MarkJSType | undefined;
    markerRef: React.MutableRefObject<T | null>;
}
/**
 * @public
 */
export declare const useMarker: <T extends Element>() => UseMarkerRes<T>;
