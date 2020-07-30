---
id: "jointdesc"
title: "JointDesc"
sidebar_label: "JointDesc"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [JointDesc](jointdesc.md)

The description of a joint to be constructed.

Note that the rigid-bodies the joint is attached to are configuration
when the joint is constructed with `world.createJoint`.

## Hierarchy

* **JointDesc**

## Index

### Methods

* [ball](jointdesc.md#static-ball)
* [revolute](jointdesc.md#static-revolute)

## Methods

### `Static` ball

▸ **ball**(`anchor1`: [Vector](vector.md), `anchor2`: [Vector](vector.md)): *[JointDesc](jointdesc.md)*

Defined in rapier3d.d.ts:205

Create a new joint descriptor that builds Ball joints.

A ball joints allows three relative rotational degrees of freedom
by preventing any relative translation between the anchors of the
two attached rigid-bodies.

**Parameters:**

Name | Type |
------ | ------ |
`anchor1` | [Vector](vector.md) |
`anchor2` | [Vector](vector.md) |

**Returns:** *[JointDesc](jointdesc.md)*

___

### `Static` revolute

▸ **revolute**(`anchor1`: [Vector](vector.md), `axis1`: [Vector](vector.md), `anchor2`: [Vector](vector.md), `axis2`: [Vector](vector.md)): *[JointDesc](jointdesc.md) | undefined*

Defined in rapier3d.d.ts:217

Create a new joint descriptor that builds Revolute joints.

A revolute joint removes all degrees of degrees of freedom between the affected
bodies except for the translation along one axis.

**Parameters:**

Name | Type |
------ | ------ |
`anchor1` | [Vector](vector.md) |
`axis1` | [Vector](vector.md) |
`anchor2` | [Vector](vector.md) |
`axis2` | [Vector](vector.md) |

**Returns:** *[JointDesc](jointdesc.md) | undefined*
