import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::result
 * @see app/Http/Controllers/HomeController.php:19
 * @route '/search-result'
 */
export const result = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(options),
    method: 'get',
})

result.definition = {
    methods: ["get","head"],
    url: '/search-result',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::result
 * @see app/Http/Controllers/HomeController.php:19
 * @route '/search-result'
 */
result.url = (options?: RouteQueryOptions) => {
    return result.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::result
 * @see app/Http/Controllers/HomeController.php:19
 * @route '/search-result'
 */
result.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: result.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::result
 * @see app/Http/Controllers/HomeController.php:19
 * @route '/search-result'
 */
result.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: result.url(options),
    method: 'head',
})
const search = {
    result: Object.assign(result, result),
}

export default search