import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\NewsController::detail
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
export const detail = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/news-detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NewsController::detail
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
detail.url = (options?: RouteQueryOptions) => {
    return detail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsController::detail
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
detail.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NewsController::detail
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
detail.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(options),
    method: 'head',
})
const news = {
    detail: Object.assign(detail, detail),
}

export default news