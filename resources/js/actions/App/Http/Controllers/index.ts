import HomeController from './HomeController'
import NewsController from './NewsController'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
NewsController: Object.assign(NewsController, NewsController),
}

export default Controllers