/// <reference types="jquery" />

interface ILoadingOverlayOptions {
    override?: boolean;
    background?: string;
    backgroundClass?: string;
    image?: string;
    imageAnimation?: string;
    imageAutoResize?: boolean;
    imageResizeFactor?: number;
    imageColor?: string;
    imageClass?: string;
    imageOrder?: number;
    fontawesome?: string;
    fontawesomeAnimation?: string;
    fontawesomeAutoResize?: boolean;
    fontawesomeResizeFactor?: number;
    fontawesomeColor?: string;
    fontawesomeOrder?: number;
    custom?: string;
    customAnimation?: string;
    customAnimationResize?: boolean;
    customResizeFactor?: number;
    customOrder?: number;
    text?: string;
    testAnimation?: string;
    textAutoResize?:boolean;
    textResizeFactor?: number;
    textColor?: string;
    textClass?: string;
    textOrder?: number;
    progress?: boolean;
    progressAutoResize?: boolean;
    progressResizeFactor?: number;
    progressColor?: string;
    progressClass?: string;
    progressOrder?: number;
    progressFixedPosition?: string;
    progressSpeed?: number;
    progressMin?: number;
    progressMax?: number;
    size?: number;
    maxSize?: number;
    minSize?: number;
    direction?: string;
    fade?: [number | boolean, number | boolean];
    resizeInterval?: number;
    zIndex?: number;
}

interface JQuery {
    LoadingOverlay(
        action: 'show' | 'hide' | 'resize' | 'text' | 'progress',
        options?: ILoadingOverlayOptions
    ): void;
}
interface JQueryStatic {
    LoadingOverlay(
        action: 'show' | 'hide' | 'resize' | 'text' | 'progress',
        options?: ILoadingOverlayOptions
    ): void;
}
