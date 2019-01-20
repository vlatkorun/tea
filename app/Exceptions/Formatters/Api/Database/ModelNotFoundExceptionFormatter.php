<?php

namespace App\Exceptions\Formatters\Api\Database;

use App\Exceptions\Formatters\Api\BaseFormatter;

class ModelNotFoundExceptionFormatter extends BaseFormatter
{
    protected $httpCode = 404;
}