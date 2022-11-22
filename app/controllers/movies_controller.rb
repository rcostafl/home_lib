class MoviesController < ApplicationController

    def index
        @movies = Movie.all

        render(template: "pages/my_page")
    end
    
    def show
        @movie = Movie.find(params[:id])
    end

    def edit
        @movie = Movie.find(params[:id])
    end

    def update
        byebug
    end

    def new
        @movie = Movie.new()
        @shelves = Shelf.all()
    end

    def create
        #byebug
        @movie = Movie.new(get_movie_par)
        @movie.user = current_user

        if @movie.save
            redirect_to movies_path
            flash[:success] = "Tudo certo, salvamos o filme!"
        end
    end

    def destroy
    end

    private
    def get_movie_par
        params.require(:movie).permit(%i[title director shelf_id image_link])
    end

end
