class StaticPagesController < ApplicationController
  def index
  end

  def sendme
    #ContactMailer.welcome_email().deliver
    #render text: "email delivered"
  end
end
