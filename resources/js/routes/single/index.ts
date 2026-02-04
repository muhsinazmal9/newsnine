import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::category
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
export const category = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/single-category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::category
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
category.url = (options?: RouteQueryOptions) => {
    return category.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::category
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
category.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::category
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/single-category'
 */
category.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(options),
    method: 'head',
})
const single = {
    category: Object.assign(category, category),
}

export default single