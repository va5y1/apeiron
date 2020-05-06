<?php

namespace Drupal\d8_react_demo\Controller;

use Drupal\Core\Controller\ControllerBase;

class ReactPageController extends ControllerBase {
  /**
   * Function (Public): Returns a vcard from a node.
   */
  public function content() {
    return array(
      '#type' => 'markup', 
      '#markup' => '<div id="application-container"></div>',
      '#attached' => [
        'library' => [
          'd8_react_demo/application',
        ],
      ],
    ); 
  } 
}
