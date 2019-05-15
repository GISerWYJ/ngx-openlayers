/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Host, Input } from '@angular/core';
import stylefunction from 'ol-mapbox-style/stylefunction';
import { applyBackground } from 'ol-mapbox-style';
import { SourceComponent } from './source.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { MapComponent } from '../map.component';
import { SourceVectorTileComponent } from './vectortile.component';
import { HttpClient } from '@angular/common/http';
var SourceMapboxVectorTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceMapboxVectorTileComponent, _super);
    function SourceMapboxVectorTileComponent(layer, map, http) {
        var _this = _super.call(this, layer) || this;
        _this.map = map;
        _this.http = http;
        _this.styleLoaded = false;
        _this.spriteJsonLoaded = false;
        _this.glStyle = {};
        _this.spriteData = {};
        return _this;
    }
    /**
     * @return {?}
     */
    SourceMapboxVectorTileComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterContentInit.call(this);
        this.http.get(this.styleUrl).subscribe((/**
         * @param {?} styleObject
         * @return {?}
         */
        function (styleObject) {
            _this.glStyle = styleObject;
            _this.styleLoaded = true;
            _this.applyMapboxStyle();
        }));
        this.http.get(this.spriteJsonUrl).subscribe((/**
         * @param {?} spriteData
         * @return {?}
         */
        function (spriteData) {
            _this.spriteData = spriteData;
            _this.spriteJsonLoaded = true;
            _this.applyMapboxStyle();
        }));
    };
    /**
     * @return {?}
     */
    SourceMapboxVectorTileComponent.prototype.applyMapboxStyle = /**
     * @return {?}
     */
    function () {
        // set the mapbox style
        if (this.spriteJsonLoaded && this.styleLoaded) {
            stylefunction(this.host.instance, this.glStyle, this.sourceName, undefined, this.spriteData, this.spriteUrl);
            applyBackground(this.map.instance, this.glStyle);
        }
    };
    SourceMapboxVectorTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-mapbox',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceMapboxVectorTileComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceMapboxVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] },
        { type: MapComponent },
        { type: HttpClient }
    ]; };
    SourceMapboxVectorTileComponent.propDecorators = {
        styleUrl: [{ type: Input }],
        sourceName: [{ type: Input }],
        spriteJsonUrl: [{ type: Input }],
        spriteUrl: [{ type: Input }]
    };
    return SourceMapboxVectorTileComponent;
}(SourceVectorTileComponent));
export { SourceMapboxVectorTileComponent };
if (false) {
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.styleUrl;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.sourceName;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.spriteJsonUrl;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.spriteUrl;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.styleLoaded;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.spriteJsonLoaded;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.glStyle;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.spriteData;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcGJveC12ZWN0b3ItdGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS1tYXBib3gtdmVjdG9yLXRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFrQyxTQUFTLEVBQWdCLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR3hILE9BQU8sYUFBYSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBYSxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRDtJQU9xRCwyREFBeUI7SUFrQjVFLHlDQUFvQixLQUErQixFQUFVLEdBQWlCLEVBQVUsSUFBZ0I7UUFBeEcsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQUY0RCxTQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsVUFBSSxHQUFKLElBQUksQ0FBWTtRQVJoRyxpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGdCQUFVLEdBQUcsRUFBRSxDQUFDOztJQUl4QixDQUFDOzs7O0lBR0QsNERBQWtCOzs7SUFBbEI7UUFBQSxpQkFjQztRQWJDLGlCQUFNLGtCQUFrQixXQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVc7WUFDaEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsVUFBVTtZQUNwRCxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUdELDBEQUFnQjs7O0lBQWhCO1FBQ0UsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDN0MsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0csZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSwrQkFBK0IsRUFBL0IsQ0FBK0IsRUFBQyxFQUFDLENBQUM7aUJBQ3hHOzs7O2dCQVhPLHdCQUF3Qix1QkE4QmpCLElBQUk7Z0JBN0JYLFlBQVk7Z0JBRVosVUFBVTs7OzJCQVdmLEtBQUs7NkJBRUwsS0FBSztnQ0FFTCxLQUFLOzRCQUVMLEtBQUs7O0lBd0NSLHNDQUFDO0NBQUEsQUF2REQsQ0FPcUQseUJBQXlCLEdBZ0Q3RTtTQWhEWSwrQkFBK0I7OztJQUUxQyxtREFBMEI7O0lBRTFCLHFEQUE0Qjs7SUFFNUIsd0RBQStCOztJQUUvQixvREFBMkI7Ozs7O0lBRTNCLHNEQUE0Qjs7Ozs7SUFFNUIsMkRBQWlDOzs7OztJQUVqQyxrREFBcUI7Ozs7O0lBRXJCLHFEQUF3Qjs7Ozs7SUFFNkIsOENBQXlCOzs7OztJQUFFLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIGZvcndhcmRSZWYsIEhvc3QsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQcm9qZWN0aW9uTGlrZX0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQge1VybEZ1bmN0aW9ufSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCBzdHlsZWZ1bmN0aW9uIGZyb20gJ29sLW1hcGJveC1zdHlsZS9zdHlsZWZ1bmN0aW9uJztcbmltcG9ydCB7YXBwbHlTdHlsZSwgYXBwbHlCYWNrZ3JvdW5kfSBmcm9tICdvbC1tYXBib3gtc3R5bGUnO1xuaW1wb3J0IHtTb3VyY2VDb21wb25lbnR9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xheWVyVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHtTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuL3ZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLW1hcGJveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50KX1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VNYXBib3hWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHN0eWxlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc291cmNlTmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNwcml0ZUpzb25Vcmw6IHN0cmluZztcblxuICBASW5wdXQoKSBzcHJpdGVVcmw6IHN0cmluZztcblxuICBwcml2YXRlIHN0eWxlTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzcHJpdGVKc29uTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBnbFN0eWxlID0ge307XG5cbiAgcHJpdmF0ZSBzcHJpdGVEYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50LCBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcblxuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zdHlsZVVybCkuc3Vic2NyaWJlKHN0eWxlT2JqZWN0ID0+IHtcbiAgICAgIHRoaXMuZ2xTdHlsZSA9IHN0eWxlT2JqZWN0O1xuICAgICAgdGhpcy5zdHlsZUxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFwcGx5TWFwYm94U3R5bGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zcHJpdGVKc29uVXJsKS5zdWJzY3JpYmUoc3ByaXRlRGF0YSA9PiB7XG4gICAgICB0aGlzLnNwcml0ZURhdGEgPSBzcHJpdGVEYXRhO1xuICAgICAgdGhpcy5zcHJpdGVKc29uTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBwbHlNYXBib3hTdHlsZSgpO1xuICAgIH0pO1xuICB9XG5cblxuICBhcHBseU1hcGJveFN0eWxlKCkge1xuICAgIC8vIHNldCB0aGUgbWFwYm94IHN0eWxlXG4gICAgaWYgKHRoaXMuc3ByaXRlSnNvbkxvYWRlZCAmJiB0aGlzLnN0eWxlTG9hZGVkKSB7XG4gICAgICBzdHlsZWZ1bmN0aW9uKHRoaXMuaG9zdC5pbnN0YW5jZSwgdGhpcy5nbFN0eWxlLCB0aGlzLnNvdXJjZU5hbWUsIHVuZGVmaW5lZCwgdGhpcy5zcHJpdGVEYXRhLCB0aGlzLnNwcml0ZVVybCk7XG4gICAgICBhcHBseUJhY2tncm91bmQodGhpcy5tYXAuaW5zdGFuY2UsIHRoaXMuZ2xTdHlsZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==