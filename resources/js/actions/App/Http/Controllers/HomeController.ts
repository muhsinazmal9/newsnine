import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::singleCategory
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
export const singleCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCategory.url(options),
    method: 'get',
})

singleCategory.definition = {
    methods: ["get","head"],
    url: '/single-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::singleCategory
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
singleCategory.url = (options?: RouteQueryOptions) => {
    return singleCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::singleCategory
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
singleCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCategory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::singleCategory
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
singleCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: singleCategory.url(options),
    method: 'head',
})
const HomeController = { index, singleCategory }

export default HomeController