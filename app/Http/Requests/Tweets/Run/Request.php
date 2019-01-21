<?php


namespace App\Http\Requests\Tweets\Run;

use Illuminate\Foundation\Http\FormRequest;
use App\Contracts\Http\Requests\SupportsCreateOrUpdateInterface;
use App\Contracts\Http\Requests\Bags\BagInterface;

class Request extends FormRequest implements SupportsCreateOrUpdateInterface
{
    /* @var BagInterface $paramsBag */
    protected $paramsBag;

    public function setBag(BagInterface $bag) : SupportsCreateOrUpdateInterface {
        $this->paramsBag = $bag;
        return $this;
    }

    public function getBag() : BagInterface {
        return $this->paramsBag;
    }

    public function extractParams() : array {
        return $this->paramsBag->attributes();
    }

    public function rules() {
        return [
            'keyword' => 'required',
            'client_id' => 'required',
        ];
    }
}