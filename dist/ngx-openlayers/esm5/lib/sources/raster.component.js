/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Output } from '@angular/core';
import { Raster } from 'ol/source';
import { RasterOperationType } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { Operation } from 'ol/source/Raster';
var SourceRasterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
        _this.sources = [];
        return _this;
    }
    /**
     * @return {?}
     */
    SourceRasterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    SourceRasterComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.beforeOperations.emit(event); }));
        this.instance.on('afteroperations', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.afterOperations.emit(event); }));
        this._register(this.instance);
    };
    SourceRasterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-raster',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [
                        {
                            provide: SourceComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceRasterComponent; })),
                        },
                    ],
                },] },
    ];
    /** @nocollapse */
    SourceRasterComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    SourceRasterComponent.propDecorators = {
        operation: [{ type: Input }],
        threads: [{ type: Input }],
        lib: [{ type: Input }],
        operationType: [{ type: Input }],
        beforeOperations: [{ type: Output }],
        afterOperations: [{ type: Output }]
    };
    return SourceRasterComponent;
}(SourceComponent));
export { SourceRasterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3QztJQVkyQyxpREFBZTtJQW1CeEQsK0JBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFSRCxzQkFBZ0IsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFMUYscUJBQWUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFekYsYUFBTyxHQUFhLEVBQUUsQ0FBQzs7SUFJdkIsQ0FBQzs7OztJQUVELGtEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELG9DQUFJOzs7SUFBSjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0I7Ozs7UUFBRSxVQUFDLEtBQXdCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCOzs7O1FBQUUsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxxQ0FFVDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDO3lCQUNyRDtxQkFDRjtpQkFDRjs7OztnQkFmUSxtQkFBbUIsdUJBbUNiLElBQUk7Ozs0QkFoQmhCLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLO2dDQUVMLEtBQUs7bUNBR0wsTUFBTTtrQ0FFTixNQUFNOztJQW1CVCw0QkFBQztDQUFBLEFBN0NELENBWTJDLGVBQWUsR0FpQ3pEO1NBakNZLHFCQUFxQjs7O0lBQ2hDLHlDQUFpQjs7SUFFakIsMENBQ3NCOztJQUN0Qix3Q0FDaUI7O0lBQ2pCLG9DQUNhOztJQUNiLDhDQUNvQzs7SUFFcEMsaURBQzBGOztJQUMxRixnREFDeUY7O0lBRXpGLHdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgUmFzdGVyT3BlcmF0aW9uVHlwZSwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcclxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVJhc3RlckNvbXBvbmVudCksXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbnN0YW5jZTogUmFzdGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wZXJhdGlvbj86IE9wZXJhdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHRocmVhZHM/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBsaWI/OiBPYmplY3Q7XHJcbiAgQElucHV0KClcclxuICBvcGVyYXRpb25UeXBlPzogUmFzdGVyT3BlcmF0aW9uVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYmVmb3JlT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgc291cmNlczogU291cmNlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSYXN0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5iZWZvcmVPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=