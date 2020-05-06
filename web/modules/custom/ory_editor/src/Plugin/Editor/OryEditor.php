<?php

namespace Drupal\ory_editor\Plugin\Editor;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\editor\Plugin\EditorBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines a ORY text editor for Drupal.
 *
 * @Editor(
 *   id = "ory_editor",
 *   label = @Translation("OryEditor"),
 *   supports_content_filtering = FALSE,
 *   supports_inline_editing = TRUE,
 *   is_xss_safe = FALSE,
 *   supported_element_types = {
 *     "textarea"
 *   }
 * )
 */

class OryEditor extends EditorBase
{

    /**
     * {@inheritdoc}
     */
    public function getJSSettings(Editor $editor)
    {

        $url = '';

        //
        // ToDo
        // Need to extend this to other entities if possible.
        //

        // Try to get the node's url.
        $node = \Drupal::routeMatch()->getParameter('node');
        if ($node instanceof \Drupal\node\NodeInterface) {
            $nid = $node->id();
            $url = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
        }

        $settings = [
        'url' => $url,
        //
        // ToDo
        // Create a config file and settings form to set the plugins and their options.
        //
        'plugins' => ['drupal-storage-textfield', 'drupal-default','gjs-blocks-flexbox', 'drupal-block', 'html-block'],
        'pluginOpts' => [
        'drupal-default' => [],
        'gjs-blocks-flexbox' => [
          'flexboxBlock' => [
            'category' => 'Layout'
          ]
        ]
        ],
        'pluginOptionsFromJs' => [
        'drupal-default' => [
          'element' => 'element',
          'format' => 'format'
        ],
        'drupal-storage-textfield' => [
          'element' => 'element',
          'format' => 'format'
        ],
        ]
        ];

        return $settings;
    }

    /**
     * {@inheritdoc}
     */
    public function getLibraries(Editor $editor)
    {
        $libs = [
        'grapesjs/grapesjs-init'
        ];
        return $libs;
    }

}
