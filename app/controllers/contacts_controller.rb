class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end
  def create
    @contact = Contact.new(params[:contact])
    if @contact.valid?
      ContactMailer.contact_email(@contact).deliver
      redirect_to '/message_sent'
    else
      render 'new'
    end
  end
end
