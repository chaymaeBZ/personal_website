class StaticPagesController < ApplicationController
  def index
  end
  def send
    c = ContactForm.new(:name => 'José', :email => 'jose@email.com', :message => 'Cool!')
    c.deliver
    render 'sendme'
  end
end
