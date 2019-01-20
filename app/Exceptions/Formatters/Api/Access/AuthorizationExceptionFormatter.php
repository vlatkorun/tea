<?php

namespace App\Exceptions\Formatters\Api\Access;

use App\Exceptions\Formatters\Api\BaseFormatter;

class AuthorizationExceptionFormatter extends BaseFormatter
{
    protected $httpCode = 403;
}