class StaticPagesController < ApplicationController
  def index
  end

  def sendme
    ContactMailer.welcome_email().deliver
  end
end
