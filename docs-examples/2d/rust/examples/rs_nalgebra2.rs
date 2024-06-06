#[rustfmt::skip]
fn main() {
    // DOCUSAURUS: Vectors1 start
    use nalgebra::{vector, Vector2};
    let v = Vector2::new(1.0, 2.0); // Basic constructor.
    let v = vector![1.0, 2.0]; // Macro.
    let v: Vector2<_> = [1.0, 2.0].into(); // From<[T; 2]> conversion.
    // DOCUSAURUS: Vectors1 stop

    // DOCUSAURUS: Vectors2 start
    let v = vector![1.0, 2.0]; // 2D vector.
    assert_eq!(v.x, 1.0);  assert_eq!(v.y, 2.0);
    assert_eq!(v[0], 1.0); assert_eq!(v[1], 2.0);
    // DOCUSAURUS: Vectors2 stop

    // DOCUSAURUS: Points start
    use nalgebra::{Point2, point};
    let pt = Point2::new(1.0, 2.0); // Basic constructor.
    let pt = point![1.0, 2.0];      // Macro.
    let pt: Point2<_> = [1.0, 2.0].into();     // From<[T; 2]> conversion.

    assert_eq!(pt.x, 1.0);  assert_eq!(pt.y, 2.0);
    assert_eq!(pt[0], 1.0); assert_eq!(pt[1], 2.0);
    // DOCUSAURUS: Points stop
    
    {
    // DOCUSAURUS: Isometries start
    use nalgebra::{Isometry2, vector};
    let iso = Isometry2::translation(1.0, 2.0);
    let iso = Isometry2::rotation(0.5); // 0.5 is a rotation angle in radians.
    let iso = Isometry2::new(vector![1.0, 2.0], 0.5);
    assert_eq!(iso.rotation.angle(), 0.5);
    assert_eq!(iso.translation.vector.x, 1.0);
    assert_eq!(iso.translation.vector.y, 2.0);
    // DOCUSAURUS: Isometries stop
    }
    {
    // DOCUSAURUS: Glam start
    // Here are just a few examples.
    use nalgebra::{vector, Point2, Isometry3};
    use glam::{Quat, Vec2, Vec3};

    let na_vector = vector![1.0, 2.0, 3.0];
    let glam_vector: Vec3 = Into::<Vec3>::into(na_vector);

    let glam_vector = Vec2::new(1.0, 2.0);
    let na_point: Point2<f32> = Into::<Point2<f32>>::into(glam_vector);

    let na_isometry: Isometry3<f32> = 
        (Vec3::new(0.1, 2.0, 0.0), Quat::from_rotation_x(0.4)).into();
    // DOCUSAURUS: Glam stop
    }
}
