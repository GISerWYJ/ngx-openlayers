/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import VectorTile from 'ol/source/VectorTile';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { UrlFunction } from 'ol/Tile';
export class SourceVectorTileComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.formatComponent !== null && this.formatComponent !== undefined) {
            this.format = this.formatComponent.instance;
        }
        if (this.tileGridComponent !== null && this.tileGridComponent !== undefined) {
            this.tileGrid = this.tileGridComponent.instance;
        }
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-vectortile',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceVectorTileComponent)) }],
            },] },
];
/** @nocollapse */
SourceVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFHOUMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFTcEMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGVBQWU7Ozs7SUEwQjVELFlBQW9CLEtBQStCO1FBQ2pELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7O0lBR0Qsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztTQUNqRDtRQUNELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUMsRUFBQyxDQUFDO2FBQ2xHOzs7O1lBYk8sd0JBQXdCLHVCQXdDakIsSUFBSTs7O3dCQXhCaEIsS0FBSzt1QkFFTCxLQUFLO3lCQUVMLEtBQUs7NkJBRUwsS0FBSzs4QkFFTCxLQUFLO2tCQUVMLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLOzhCQUdMLFlBQVksU0FBQyxlQUFlO2dDQUc1QixZQUFZLFNBQUMsaUJBQWlCOzs7O0lBckIvQiw2Q0FBNEI7O0lBQzVCLDhDQUNrQjs7SUFDbEIsNkNBQ2tCOztJQUNsQiwrQ0FDMkI7O0lBQzNCLG1EQUN1Qjs7SUFDdkIsb0RBQzZCOztJQUM3Qix3Q0FDWTs7SUFDWix5Q0FDZTs7SUFDZiwwQ0FDZTs7SUFFZixvREFDaUM7O0lBQ2pDLDJDQUFnQjs7SUFDaEIsc0RBQ3FDOztJQUNyQyw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBWZWN0b3JUaWxlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3JUaWxlJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQge0xheWVyVmVjdG9yVGlsZUNvbXBvbmVudH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdENvbXBvbmVudH0gZnJvbSAnLi4vZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUaWxlR3JpZENvbXBvbmVudH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTb3VyY2VDb21wb25lbnR9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvamVjdGlvbkxpa2V9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQge1VybEZ1bmN0aW9ufSBmcm9tICdvbC9UaWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3J0aWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCl9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFZlY3RvclRpbGU7XHJcbiAgQElucHV0KClcclxuICBjYWNoZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG92ZXJsYXBzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgQElucHV0KClcclxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChGb3JtYXRDb21wb25lbnQpXHJcbiAgZm9ybWF0Q29tcG9uZW50OiBGb3JtYXRDb21wb25lbnQ7XHJcbiAgZm9ybWF0OiBGZWF0dXJlO1xyXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRDb21wb25lbnQpXHJcbiAgdGlsZUdyaWRDb21wb25lbnQ6IFRpbGVHcmlkQ29tcG9uZW50O1xyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICAvKiBuZWVkIHRoZSBjaGlsZHJlbiB0byBjb25zdHJ1Y3QgdGhlIE9MMyBvYmplY3QgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXRDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy5mb3JtYXRDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZm9ybWF0Q29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGlsZUdyaWRDb21wb25lbnQgIT09IG51bGwgJiYgdGhpcy50aWxlR3JpZENvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkQ29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnNvdXJjZS5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=