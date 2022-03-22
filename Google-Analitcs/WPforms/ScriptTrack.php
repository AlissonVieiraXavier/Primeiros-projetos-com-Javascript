
 
function ga_track_event_form_submission( $fields, $entry, $form_data, $entry_id ) {
 
  $endpoint = 'https://ssl.google-analytics.com/collect?';
 
  $payload_data = array(
    'v' => 1,
    'tid' => 'UA-XXXXXXXXX-1',
    'cid' => 123,
    't' => 'event',
    'ec' => 'Forms',
    'ea' => 'Successful Submission',
    'el' => 'Contact Us'
    );
 
    $parameters = http_build_query( $payload_data );
 
    wp_remote_post( $endpoint . $parameters );
 
}
 
add_action( 'wpforms_process_complete_25', 'ga_track_event_form_submission', 10, 4 );