<?php

namespace App\Exceptions\Formatters\Api\Access;

use App\Exceptions\Formatters\Api\BaseFormatter;

class AuthenticationExceptionFormatter extends BaseFormatter
{
    protected $httpCode = 401;
}