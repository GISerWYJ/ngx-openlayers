/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Host, Input, Output } from '@angular/core';
import { Raster } from 'ol/source';
import { RasterOperationType } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { Operation } from 'ol/source/Raster';
export class SourceRasterComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.beforeOperations.emit(event)));
        this.instance.on('afteroperations', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.afterOperations.emit(event)));
        this._register(this.instance);
    }
}
SourceRasterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-raster',
                template: `
    <ng-content></ng-content>
  `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceRasterComponent)),
                    },
                ],
            },] },
];
/** @nocollapse */
SourceRasterComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceRasterComponent.propDecorators = {
    operation: [{ type: Input }],
    threads: [{ type: Input }],
    lib: [{ type: Input }],
    operationType: [{ type: Input }],
    beforeOperations: [{ type: Output }],
    afterOperations: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SourceRasterComponent.prototype.instance;
    /** @type {?} */
    SourceRasterComponent.prototype.operation;
    /** @type {?} */
    SourceRasterComponent.prototype.threads;
    /** @type {?} */
    SourceRasterComponent.prototype.lib;
    /** @type {?} */
    SourceRasterComponent.prototype.operationType;
    /** @type {?} */
    SourceRasterComponent.prototype.beforeOperations;
    /** @type {?} */
    SourceRasterComponent.prototype.afterOperations;
    /** @type {?} */
    SourceRasterComponent.prototype.sources;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBYzdDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlOzs7O0lBbUJ4RCxZQUFvQixLQUEwQjtRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFQZixxQkFBZ0IsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFMUYsb0JBQWUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFekYsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUl2QixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0I7Ozs7UUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7Ozs7UUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO3FCQUNyRDtpQkFDRjthQUNGOzs7O1lBZlEsbUJBQW1CLHVCQW1DYixJQUFJOzs7d0JBaEJoQixLQUFLO3NCQUVMLEtBQUs7a0JBRUwsS0FBSzs0QkFFTCxLQUFLOytCQUdMLE1BQU07OEJBRU4sTUFBTTs7OztJQWJQLHlDQUFpQjs7SUFFakIsMENBQ3NCOztJQUN0Qix3Q0FDaUI7O0lBQ2pCLG9DQUNhOztJQUNiLDhDQUNvQzs7SUFFcEMsaURBQzBGOztJQUMxRixnREFDeUY7O0lBRXpGLHdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUmFzdGVyT3BlcmF0aW9uVHlwZSwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVJhc3RlckNvbXBvbmVudCksXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogUmFzdGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wZXJhdGlvbj86IE9wZXJhdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRocmVhZHM/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsaWI/OiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBvcGVyYXRpb25UeXBlPzogUmFzdGVyT3BlcmF0aW9uVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYmVmb3JlT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgc291cmNlczogU291cmNlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSYXN0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5iZWZvcmVPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=