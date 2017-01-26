class StaticPagesController < ApplicationController
  def index
  end

  def thankyou
    #ContactMailer.welcome_email().deliver
    #render text: "email delivered"
  end
end
