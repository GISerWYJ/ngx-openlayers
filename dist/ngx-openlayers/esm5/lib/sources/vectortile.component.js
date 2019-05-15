/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import VectorTile from 'ol/source/VectorTile';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { UrlFunction } from 'ol/Tile';
var SourceVectorTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceVectorTileComponent, _super);
    function SourceVectorTileComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /* need the children to construct the OL3 object */
    /* need the children to construct the OL3 object */
    /**
     * @return {?}
     */
    SourceVectorTileComponent.prototype.ngAfterContentInit = /* need the children to construct the OL3 object */
    /**
     * @return {?}
     */
    function () {
        if (this.formatComponent !== null && this.formatComponent !== undefined) {
            this.format = this.formatComponent.instance;
        }
        if (this.tileGridComponent !== null && this.tileGridComponent !== undefined) {
            this.tileGrid = this.tileGridComponent.instance;
        }
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-vectortile',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceVectorTileComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
    ]; };
    SourceVectorTileComponent.propDecorators = {
        cacheSize: [{ type: Input }],
        overlaps: [{ type: Input }],
        projection: [{ type: Input }],
        tilePixelRatio: [{ type: Input }],
        tileUrlFunction: [{ type: Input }],
        url: [{ type: Input }],
        urls: [{ type: Input }],
        wrapX: [{ type: Input }],
        formatComponent: [{ type: ContentChild, args: [FormatComponent,] }],
        tileGridComponent: [{ type: ContentChild, args: [TileGridComponent,] }]
    };
    return SourceVectorTileComponent;
}(SourceComponent));
export { SourceVectorTileComponent };
if (false) {
    /** @type {?} */
    SourceVectorTileComponent.prototype.instance;
    /** @type {?} */
    SourceVectorTileComponent.prototype.cacheSize;
    /** @type {?} */
    SourceVectorTileComponent.prototype.overlaps;
    /** @type {?} */
    SourceVectorTileComponent.prototype.projection;
    /** @type {?} */
    SourceVectorTileComponent.prototype.tilePixelRatio;
    /** @type {?} */
    SourceVectorTileComponent.prototype.tileUrlFunction;
    /** @type {?} */
    SourceVectorTileComponent.prototype.url;
    /** @type {?} */
    SourceVectorTileComponent.prototype.urls;
    /** @type {?} */
    SourceVectorTileComponent.prototype.wrapX;
    /** @type {?} */
    SourceVectorTileComponent.prototype.formatComponent;
    /** @type {?} */
    SourceVectorTileComponent.prototype.format;
    /** @type {?} */
    SourceVectorTileComponent.prototype.tileGridComponent;
    /** @type {?} */
    SourceVectorTileComponent.prototype.tileGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sVUFBVSxNQUFNLHNCQUFzQixDQUFDO0FBRzlDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXBDO0lBTytDLHFEQUFlO0lBMEI1RCxtQ0FBb0IsS0FBK0I7ZUFDakQsa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELG1EQUFtRDs7Ozs7SUFDbkQsc0RBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtZQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7WUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1NBQ2pEO1FBQ0QscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxxQ0FFVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUMsRUFBQyxDQUFDO2lCQUNsRzs7OztnQkFiTyx3QkFBd0IsdUJBd0NqQixJQUFJOzs7NEJBeEJoQixLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSztpQ0FFTCxLQUFLO2tDQUVMLEtBQUs7c0JBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7a0NBR0wsWUFBWSxTQUFDLGVBQWU7b0NBRzVCLFlBQVksU0FBQyxpQkFBaUI7O0lBb0JqQyxnQ0FBQztDQUFBLEFBakRELENBTytDLGVBQWUsR0EwQzdEO1NBMUNZLHlCQUF5Qjs7O0lBQ3BDLDZDQUE0Qjs7SUFDNUIsOENBQ2tCOztJQUNsQiw2Q0FDa0I7O0lBQ2xCLCtDQUMyQjs7SUFDM0IsbURBQ3VCOztJQUN2QixvREFDNkI7O0lBQzdCLHdDQUNZOztJQUNaLHlDQUNlOztJQUNmLDBDQUNlOztJQUVmLG9EQUNpQzs7SUFDakMsMkNBQWdCOztJQUNoQixzREFDcUM7O0lBQ3JDLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0LCBJbnB1dCwgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFZlY3RvclRpbGUgZnJvbSAnb2wvc291cmNlL1ZlY3RvclRpbGUnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XHJcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XHJcbmltcG9ydCB7TGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybWF0Q29tcG9uZW50fSBmcm9tICcuLi9mb3JtYXRzL2Zvcm1hdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RpbGVHcmlkQ29tcG9uZW50fSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvdXJjZUNvbXBvbmVudH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtQcm9qZWN0aW9uTGlrZX0gZnJvbSAnb2wvcHJvaic7XHJcbmltcG9ydCB7VXJsRnVuY3Rpb259IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXZlY3RvcnRpbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50KX1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogVmVjdG9yVGlsZTtcclxuICBASW5wdXQoKVxyXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlVXJsRnVuY3Rpb246IFVybEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB1cmxzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYOiBib29sZWFuO1xyXG5cclxuICBAQ29udGVudENoaWxkKEZvcm1hdENvbXBvbmVudClcclxuICBmb3JtYXRDb21wb25lbnQ6IEZvcm1hdENvbXBvbmVudDtcclxuICBmb3JtYXQ6IEZlYXR1cmU7XHJcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudClcclxuICB0aWxlR3JpZENvbXBvbmVudDogVGlsZUdyaWRDb21wb25lbnQ7XHJcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvclRpbGVDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIC8qIG5lZWQgdGhlIGNoaWxkcmVuIHRvIGNvbnN0cnVjdCB0aGUgT0wzIG9iamVjdCAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdENvbXBvbmVudCAhPT0gbnVsbCAmJiB0aGlzLmZvcm1hdENvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5mb3JtYXRDb21wb25lbnQuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aWxlR3JpZENvbXBvbmVudCAhPT0gbnVsbCAmJiB0aGlzLnRpbGVHcmlkQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRDb21wb25lbnQuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc291cmNlLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yVGlsZSh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==