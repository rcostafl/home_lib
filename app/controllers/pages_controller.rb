class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: :main

    def main
    end

    def my_page
    end

    def components
    end
end
