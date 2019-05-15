/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
var SourceImageWMSComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.onImageLoadStart = new EventEmitter();
        _this.onImageLoadEnd = new EventEmitter();
        _this.onImageLoadError = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SourceImageWMSComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadStart.emit(event); }));
        this.instance.on('imageloadend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadEnd.emit(event); }));
        this.instance.on('imageloaderror', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onImageLoadError.emit(event); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SourceImageWMSComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceImageWMSComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-imagewms',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageWMSComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageWMSComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
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
    return SourceImageWMSComponent;
}(SourceComponent));
export { SourceImageWMSComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBR0wsVUFBVSxFQUVWLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHeEM7SUFPNkMsbURBQWU7SUErQjFELGlDQUFvQixLQUEwQjtRQUE5QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBUkQsc0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFeEQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV0RCxzQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQzs7SUFJeEQsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjOzs7O1FBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7SUFDckcsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixFQUFDLEVBQUUsQ0FBQztpQkFDbEc7Ozs7Z0JBYlEsbUJBQW1CLHVCQTZDYixJQUFJOzs7K0JBNUJoQixLQUFLOzhCQUVMLEtBQUs7d0JBRUwsS0FBSzs2QkFFTCxLQUFLO29DQUVMLEtBQUs7eUJBRUwsS0FBSzs2QkFFTCxLQUFLO3dCQUVMLEtBQUs7OEJBRUwsS0FBSztzQkFFTCxLQUFLO21DQUdMLE1BQU07aUNBRU4sTUFBTTttQ0FFTixNQUFNOztJQW9CVCw4QkFBQztDQUFBLEFBdkRELENBTzZDLGVBQWUsR0FnRDNEO1NBaERZLHVCQUF1Qjs7O0lBQ2xDLDJDQUFtQjs7SUFFbkIsK0NBQzhCOztJQUM5Qiw4Q0FDb0I7O0lBQ3BCLHdDQUNlOztJQUNmLDZDQUNtQjs7SUFDbkIsb0RBQ2lDOztJQUNqQyx5Q0FDZTs7SUFDZiw2Q0FDb0M7O0lBQ3BDLHdDQUNjOztJQUNkLDhDQUMyQjs7SUFDM0Isc0NBQ1k7O0lBRVosbURBQ3dEOztJQUN4RCxpREFDc0Q7O0lBQ3RELG1EQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcclxuaW1wb3J0IHsgSW1hZ2VTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9JbWFnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtaW1hZ2V3bXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlSW1hZ2VXTVNDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IEltYWdlV01TO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xyXG4gIEBJbnB1dCgpXHJcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGhpZHBpOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VydmVyVHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBwYXJhbXM6IE9iamVjdDtcclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBBcnJheTxudW1iZXI+O1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSW1hZ2VMb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlV01TKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVycm9yJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLm9uSW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=