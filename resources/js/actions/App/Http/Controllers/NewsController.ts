import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NewsController::show
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/news-detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NewsController::show
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsController::show
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NewsController::show
 * @see app/Http/Controllers/NewsController.php:9
 * @route '/news-detail'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const NewsController = { show }

export default NewsController