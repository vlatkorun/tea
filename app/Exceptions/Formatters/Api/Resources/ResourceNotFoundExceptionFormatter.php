<?php

namespace App\Exceptions\Formatters\Api\Resources;

use App\Exceptions\Formatters\Api\BaseFormatter;

class ResourceNotFoundExceptionFormatter extends BaseFormatter
{
    protected $httpCode = 404;
}