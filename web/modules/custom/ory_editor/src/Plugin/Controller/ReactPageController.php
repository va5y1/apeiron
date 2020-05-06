<?php

namespace Drupal\ory_editor\Plugin\Controller;

use Drupal\Core\Controller\ControllerBase;

class ReactPageController extends ControllerBase {
  /**
   * Function (Public): Returns a vcard from a node.
   */
  public function content() {
    return array(
      '#type' => 'markup', 
      '#markup' => '<div id="root"></div>',
      '#attached' => [
        'library' => [
          'ory_editor/ory_editor',
        ],
      ],
    ); 
  } 
}
