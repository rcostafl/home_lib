class MoviesController < ApplicationController

    def index
        @movies = Movie.all

        render(template: "pages/my_page")
    end
    
    def show
    end

    def new
    end

    def create
    end

    def destroy
    end

    #search
end
