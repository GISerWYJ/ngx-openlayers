/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
export class SourceImageStaticComponent extends SourceComponent {
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
        this.instance = new ImageStatic(this);
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
}
SourceImageStaticComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagestatic',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageStaticComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageStaticComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceImageStaticComponent.propDecorators = {
    projection: [{ type: Input }],
    imageExtent: [{ type: Input }],
    url: [{ type: Input }],
    attributions: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    imageLoadFunction: [{ type: Input }],
    imageSize: [{ type: Input }],
    onImageLoadStart: [{ type: Output }],
    onImageLoadEnd: [{ type: Output }],
    onImageLoadError: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SourceImageStaticComponent.prototype.instance;
    /** @type {?} */
    SourceImageStaticComponent.prototype.projection;
    /** @type {?} */
    SourceImageStaticComponent.prototype.imageExtent;
    /** @type {?} */
    SourceImageStaticComponent.prototype.url;
    /** @type {?} */
    SourceImageStaticComponent.prototype.attributions;
    /** @type {?} */
    SourceImageStaticComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceImageStaticComponent.prototype.imageLoadFunction;
    /** @type {?} */
    SourceImageStaticComponent.prototype.imageSize;
    /** @type {?} */
    SourceImageStaticComponent.prototype.onImageLoadStart;
    /** @type {?} */
    SourceImageStaticComponent.prototype.onImageLoadEnd;
    /** @type {?} */
    SourceImageStaticComponent.prototype.onImageLoadError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzdGF0aWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXN0YXRpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFVL0IsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGVBQWU7Ozs7SUF5QjdELFlBQW9CLEtBQTBCO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVBmLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXhELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFJeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYzs7OztRQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNyRyxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsRUFBQyxFQUFFLENBQUM7YUFDckc7Ozs7WUFkUSxtQkFBbUIsdUJBd0NiLElBQUk7Ozt5QkF0QmhCLEtBQUs7MEJBRUwsS0FBSztrQkFFTCxLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSztnQ0FFTCxLQUFLO3dCQUVMLEtBQUs7K0JBR0wsTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07Ozs7SUFyQlAsOENBQXNCOztJQUV0QixnREFDb0M7O0lBQ3BDLGlEQUNvQjs7SUFDcEIseUNBQ1k7O0lBQ1osa0RBQzhCOztJQUM5QixpREFDcUI7O0lBQ3JCLHVEQUNpQzs7SUFDakMsK0NBQ2lCOztJQUVqQixzREFDd0Q7O0lBQ3hELG9EQUNzRDs7SUFDdEQsc0RBQ3dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRpYyB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlc3RhdGljJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogSW1hZ2VTdGF0aWM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpbWFnZUV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBpbWFnZVNpemU/OiBTaXplO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVN0YXRpYyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcclxuICB9XHJcbn1cclxuIl19