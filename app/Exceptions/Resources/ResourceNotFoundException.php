<?php

namespace App\Exceptions\Resources;

use Exception;

class ResourceNotFoundException extends Exception
{
    public $resourceId;

    public function __construct($resourceId)
    {
        parent::__construct('Resource not found');

        $this->resourceId = $resourceId;
    }
}