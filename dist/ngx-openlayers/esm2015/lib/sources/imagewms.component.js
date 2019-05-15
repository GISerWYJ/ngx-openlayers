/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
export class SourceImageWMSComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.onImageLoadStart = new EventEmitter();
        this.onImageLoadEnd = new EventEmitter();
        this.onImageLoadError = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadStart.emit(event)));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadEnd.emit(event)));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onImageLoadError.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageWMSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagewms',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageWMSComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageWMSComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceImageWMSComponent.propDecorators = {
    attributions: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    hidpi: [{ type: Input }],
    serverType: [{ type: Input }],
    imageLoadFunction: [{ type: Input }],
    params: [{ type: Input }],
    projection: [{ type: Input }],
    ratio: [{ type: Input }],
    resolutions: [{ type: Input }],
    url: [{ type: Input }],
    onImageLoadStart: [{ type: Output }],
    onImageLoadEnd: [{ type: Output }],
    onImageLoadError: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SourceImageWMSComponent.prototype.instance;
    /** @type {?} */
    SourceImageWMSComponent.prototype.attributions;
    /** @type {?} */
    SourceImageWMSComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceImageWMSComponent.prototype.hidpi;
    /** @type {?} */
    SourceImageWMSComponent.prototype.serverType;
    /** @type {?} */
    SourceImageWMSComponent.prototype.imageLoadFunction;
    /** @type {?} */
    SourceImageWMSComponent.prototype.params;
    /** @type {?} */
    SourceImageWMSComponent.prototype.projection;
    /** @type {?} */
    SourceImageWMSComponent.prototype.ratio;
    /** @type {?} */
    SourceImageWMSComponent.prototype.resolutions;
    /** @type {?} */
    SourceImageWMSComponent.prototype.url;
    /** @type {?} */
    SourceImageWMSComponent.prototype.onImageLoadStart;
    /** @type {?} */
    SourceImageWMSComponent.prototype.onImageLoadEnd;
    /** @type {?} */
    SourceImageWMSComponent.prototype.onImageLoadError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFHTCxVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVV4QyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBZTs7OztJQStCMUQsWUFBb0IsS0FBMEI7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGYscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFeEQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV0RCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQUl4RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjOzs7O1FBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOztHQUVUO2dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFDLEVBQUUsQ0FBQzthQUNsRzs7OztZQWJRLG1CQUFtQix1QkE2Q2IsSUFBSTs7OzJCQTVCaEIsS0FBSzswQkFFTCxLQUFLO29CQUVMLEtBQUs7eUJBRUwsS0FBSztnQ0FFTCxLQUFLO3FCQUVMLEtBQUs7eUJBRUwsS0FBSztvQkFFTCxLQUFLOzBCQUVMLEtBQUs7a0JBRUwsS0FBSzsrQkFHTCxNQUFNOzZCQUVOLE1BQU07K0JBRU4sTUFBTTs7OztJQTNCUCwyQ0FBbUI7O0lBRW5CLCtDQUM4Qjs7SUFDOUIsOENBQ29COztJQUNwQix3Q0FDZTs7SUFDZiw2Q0FDbUI7O0lBQ25CLG9EQUNpQzs7SUFDakMseUNBQ2U7O0lBQ2YsNkNBQ29DOztJQUNwQyx3Q0FDYzs7SUFDZCw4Q0FDMkI7O0lBQzNCLHNDQUNZOztJQUVaLG1EQUN3RDs7SUFDeEQsaURBQ3NEOztJQUN0RCxtREFDd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlV01TIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xyXG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdld21zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlV01TQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBJbWFnZVdNUztcclxuXHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNlcnZlclR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFyYW1zOiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVdNUyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19