/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
var SourceImageStaticComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.onImageLoadStart = new EventEmitter();
        _this.onImageLoadEnd = new EventEmitter();
        _this.onImageLoadError = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SourceImageStaticComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new ImageStatic(this);
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
    SourceImageStaticComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-imagestatic',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceImageStaticComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceImageStaticComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
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
    return SourceImageStaticComponent;
}(SourceComponent));
export { SourceImageStaticComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzdGF0aWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXN0YXRpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRy9CO0lBT2dELHNEQUFlO0lBeUI3RCxvQ0FBb0IsS0FBMEI7UUFBOUMsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQVJELHNCQUFnQixHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXhELG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdEQsc0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7O0lBSXhELENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYzs7OztRQUFFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUFDO0lBQ3JHLENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSwwQkFBMEIsRUFBMUIsQ0FBMEIsRUFBQyxFQUFFLENBQUM7aUJBQ3JHOzs7O2dCQWRRLG1CQUFtQix1QkF3Q2IsSUFBSTs7OzZCQXRCaEIsS0FBSzs4QkFFTCxLQUFLO3NCQUVMLEtBQUs7K0JBRUwsS0FBSzs4QkFFTCxLQUFLO29DQUVMLEtBQUs7NEJBRUwsS0FBSzttQ0FHTCxNQUFNO2lDQUVOLE1BQU07bUNBRU4sTUFBTTs7SUFjVCxpQ0FBQztDQUFBLEFBM0NELENBT2dELGVBQWUsR0FvQzlEO1NBcENZLDBCQUEwQjs7O0lBQ3JDLDhDQUFzQjs7SUFFdEIsZ0RBQ29DOztJQUNwQyxpREFDb0I7O0lBQ3BCLHlDQUNZOztJQUNaLGtEQUM4Qjs7SUFDOUIsaURBQ3FCOztJQUNyQix1REFDaUM7O0lBQ2pDLCtDQUNpQjs7SUFFakIsc0RBQ3dEOztJQUN4RCxvREFDc0Q7O0lBQ3RELHNEQUN3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0aWMgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXN0YXRpYycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZVN0YXRpY0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZVN0YXRpY0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaW5zdGFuY2U6IEltYWdlU3RhdGljO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VFeHRlbnQ6IEV4dGVudDtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbj86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2VTaXplPzogU2l6ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VTdGF0aWModGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2Fkc3RhcnQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMub25JbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==