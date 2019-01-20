<?php

namespace App\Exceptions\Formatters\Api\Validation;

use Exception;
use App\Exceptions\Formatters\Api\BaseFormatter;

class ValidationExceptionFormatter extends BaseFormatter
{
    protected $httpCode = 422;

    protected function prepareData(array $data, Exception $exception)
    {
        return array_merge($data, ['errors' => $exception->validator->errors()->toArray()]);
    }
}