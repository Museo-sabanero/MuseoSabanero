<?php

namespace App\Mail;

use App\Models\Delivery;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $delivery;
    public $subject;
    public $data;
    
    public function __construct($subject, $emailBody)
    {
        $this->subject = $subject;

        $this->data = [
            'emailBody' => $emailBody
        ];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      
        return $this->subject($this->subject)->view('email.template');
    }
}
